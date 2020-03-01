import React from 'react';
import PropTypes from 'prop-types';
import PreviewCard from '../preview-card/preview-card.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';

const PreviewCardsList = ({cardsData, activeCard, previewCardHandlers}) => {
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
            isPlaying: activeCard !== null && activeCard.id === card.id,
          }}
          previewCardHandlers={previewCardHandlers}
        />
      );
    });

  return (
    <div className="catalog__movies-list">
      {previewCards}
    </div>
  );
};

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
  activeCard: PropTypes.object,
  previewCardHandlers: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};

PreviewCardsList.defaultProps = {
  activeCard: null,
};

export default PreviewCardsList;
