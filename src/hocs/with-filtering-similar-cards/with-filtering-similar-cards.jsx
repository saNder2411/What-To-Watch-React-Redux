import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';
import PreviewCardsList from '../../components/preview-cards-list/preview-cards-list.jsx';

const MAX_AMOUNT_SIMILAR_CARD = 4;

const withFilteringSimilarCards = (Component) => {
  class WithFilterPreviewCards extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        activeCard: null,
      };

      this._handlePreviewCardClick = this._handlePreviewCardClick.bind(this);
      this._handlePreviewCardMouseEnter = this._handlePreviewCardMouseEnter.bind(this);
      this._handlePreviewCardMouseLeave = this._handlePreviewCardMouseLeave.bind(this);
    }

    _handlePreviewCardClick(evt) {
      evt.preventDefault();
      const {currentTarget: {id}} = evt;
      const {history} = this.props;

      history.push(`/cards${id}`);
    }

    _handlePreviewCardMouseEnter(evt) {
      const activeCard = this.props.cardsData.find((card) => card.id === +evt.currentTarget.id);

      this.setState({activeCard});
    }

    _handlePreviewCardMouseLeave() {
      this.setState({activeCard: null});
    }

    _filtersSimilarCards(card, cards) {
      return cards
        .filter(({id, detailsData}) => detailsData.genre === card.detailsData.genre && id !== card.id)
        .slice(0, MAX_AMOUNT_SIMILAR_CARD);
    }

    _renderComponent() {
      const {cardData = false, cardsData} = this.props;
      if (cardData) {
        const similarCards = this._filtersSimilarCards(cardData, cardsData);

        return (
          <Component
            {...this.props}
            cardsData={similarCards}
            activeCard={this.state.activeCard}
            previewCardHandlers={[this._handlePreviewCardClick, this._handlePreviewCardMouseEnter, this._handlePreviewCardMouseLeave]}
          />
        );
      }

      return (
        <Component
          {...this.props}
          activeCard={this.state.activeCard}
          previewCardHandlers={[this._handlePreviewCardClick, this._handlePreviewCardMouseEnter, this._handlePreviewCardMouseLeave]}
        />
      );
    }

    render() {
      return this._renderComponent();
    }
  }

  WithFilterPreviewCards.propTypes = {
    cardData: PropTypes.object,
    cardsData: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    history: PropTypes.object.isRequired,
  };

  return WithFilterPreviewCards;
};

export default withRouter(withFilteringSimilarCards(PreviewCardsList));
