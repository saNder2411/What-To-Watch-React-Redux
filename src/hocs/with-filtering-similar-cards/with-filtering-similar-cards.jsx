import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

const MAX_AMOUNT_SIMILAR_CARD = 4;

const withFilteringSimilarCards = (Component) => {
  class WithFilterPreviewCards extends PureComponent {
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
          />
        );
      }

      return (
        <Component
          {...this.props}
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
  };

  return WithFilterPreviewCards;
};

export default withFilteringSimilarCards;
