import React from 'react';
import PropTypes from 'prop-types';
import PreviewCard from '../preview-card/preview-card.jsx';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player.jsx';

const PreviewCardList = ({cards, mouseEnterCard, previewCardHandlers}) => {

  const WrappedPreviewCard = withVideoPlayer(PreviewCard);

  const previewCards = cards
    .map(({id, title, previewImage, previewVideoSrc}) => {
      const isPlaying = mouseEnterCard !== null && mouseEnterCard.id === id;

      return (
        <WrappedPreviewCard
          key={`${id}-${title.slice(0, 2)}`}
          previewCardData={{id, title, previewImage, previewVideoSrc, isPlaying}}
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

PreviewCardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  mouseEnterCard: PropTypes.object,
  previewCardHandlers: PropTypes.arrayOf(PropTypes.func.isRequired).isRequired,
};

export default PreviewCardList;
