import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import PreviewCard from '../preview-card/preview-card.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';

export default class PreviewCardsList extends PureComponent {
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

    this.props.onScreenChange(id);
  }

  _handlePreviewCardMouseEnter(evt) {
    const activeCard = this.props.cardsData.find((card) => card.id === +evt.currentTarget.id);

    this.setState({activeCard});
  }

  _handlePreviewCardMouseLeave() {
    this.setState({activeCard: null});
  }

  render() {
    const {cardsData} = this.props;
    const WrappedPreviewCard = withVideoPlayer(PreviewCard);

    const previewCards = cardsData
      .map((card) => {
        return (
          <WrappedPreviewCard
            key={`${card.id}-${card.overviewData.title.slice(0, 2)}`}
            previewCardData={{
              id: card.id,
              title: card.overviewData.title,
              poster: card.overviewData.previewPoster,
              previewVideoSrc: card.overviewData.previewVideoSrc,
              isPlaying: this.state.activeCard !== null && this.state.activeCard.id === card.id,
            }}
            previewCardHandlers={[this._handlePreviewCardClick, this._handlePreviewCardMouseEnter, this._handlePreviewCardMouseLeave]}
          />
        );
      });

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
      previewVideoSrc: PropTypes.string.isRequired,
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
