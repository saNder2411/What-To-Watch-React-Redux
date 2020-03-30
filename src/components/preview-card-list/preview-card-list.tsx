import * as React from 'react';

import PreviewCard from '../preview-card/preview-card';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';

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

export default PreviewCardList;
