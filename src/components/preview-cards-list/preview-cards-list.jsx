import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PreviewCard from '../preview-card/preview-card.jsx';

export default class PreviewCardsList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCard: null,
    };

    this._handlePreviewCardClick = this._handlePreviewCardClick.bind(this);
    this._handlePreviewCardMouseOver = this._handlePreviewCardMouseOver.bind(this);
  }

  _handlePreviewCardClick(evt) {
    evt.preventDefault();

    this.props.onScreenChange(evt.currentTarget.id);
  }

  _handlePreviewCardMouseOver(evt) {
    const activeCard = this.props.cardsData.find((card) => card.id === +evt.currentTarget.id);

    this.setState({activeCard});
  }

  render() {
    const {cardsData} = this.props;

    const previewCards = cardsData
      .map((card) => (
        <PreviewCard
          key={`${card.id}-${card.overviewData.title.slice(0, 2)}`}
          previewCardData={{
            id: card.id,
            title: card.overviewData.title,
            poster: card.overviewData.previewPoster,
          }}
          previewCardHandlers={[this._handlePreviewCardClick, this._handlePreviewCardMouseOver]}
        />
      ));

    return (
      <div className="catalog__movies-list">
        {previewCards}
      </div>
    );
  }


}

PreviewCardsList.propTypes = {
  cardsData: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    overviewData: PropTypes.shape({
      promoPoster: PropTypes.string.isRequired,
      poster: PropTypes.string.isRequired,
      previewPoster: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      descriptions: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      rating: PropTypes.string.isRequired,
      amountVoice: PropTypes.number.isRequired,
    }).isRequired,
    detailsData: PropTypes.shape({
      director: PropTypes.string.isRequired,
      actors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
      runtime: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
      release: PropTypes.date,
    }).isRequired,
    reviewsId: PropTypes.arrayOf(PropTypes.number.isRequired).isRequired,
  })).isRequired,
  onScreenChange: PropTypes.func.isRequired,
};
