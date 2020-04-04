import * as React from 'react';

import compose from '../../hocs/compose/compose';
import withPreviewCardState from '../../hocs/with-preview-card-state/with-preview-card-state';
import withVideoPlayer from '../../hocs/with-video-player/with-video-player';

import PreviewCard from '../preview-card/preview-card';

import {Card, HandleWithEvt} from '../../types';

type Props = {
  cards: Array<Card>;
  previewCardHandlers: Array<HandleWithEvt>;
}

const PreviewCardList: React.FC<Props> = ({cards, previewCardHandlers}: Props) => {

  const previewCards = cards
    .map(({id, title, previewImage, previewVideoSrc}) => {
      const WrappedPreviewCard = compose(withPreviewCardState, withVideoPlayer)(PreviewCard);

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
