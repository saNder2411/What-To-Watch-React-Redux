import * as React from 'react';

import PreviewCard from '../preview-card/preview-card';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';
import {Card, HandleWithEvt, Handle} from '../../types';

type Props = {
  cards: Array<Card>;
  previewCardHandlers: Array<HandleWithEvt | Handle>;
}

const PreviewCardList: React.FC<Props> = ({cards, previewCardHandlers}: Props) => {

  const previewCards = cards
    .map(({id, title, previewImage, previewVideoSrc}) => {
      const WrappedPreviewCard = withVideoPlayer(PreviewCard);

      return (
        <WrappedPreviewCard
          key={`${id}-${title.slice(0, 2)}`}
          previewCardData={{id, title, previewImage, previewVideoSrc}}
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
