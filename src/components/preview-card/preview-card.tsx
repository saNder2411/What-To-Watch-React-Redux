import * as React from 'react';
import {PreviewCardData, VideoProps, HandleWithEvt, Handle} from '../../types';


const PreviewVideoOptions = {
  WIDTH: 280,
  HEIGHT: 175,
  IS_MUTED: true,
  IS_DELAY: true,
};

type Props = {
  isPlaying: boolean;
  previewCardData: PreviewCardData;
  previewCardHandlers: Array<HandleWithEvt | Handle>;
  renderPlayer: (videoProps: VideoProps) => React.ReactNode;
}

const PreviewCard: React.FC<Props> = ({isPlaying, previewCardData, previewCardHandlers, renderPlayer}: Props) => {

  const {id, title, previewImage, previewVideoSrc} = previewCardData;
  const [onPreviewCardClick, onPreviewCardMouseEnter, onPreviewCardMouseLeave] = previewCardHandlers;

  const videoProps = {
    isPlaying,
    previewImage,
    src: previewVideoSrc,
    isMuted: PreviewVideoOptions.IS_MUTED,
    isDelay: PreviewVideoOptions.IS_DELAY,
    width: PreviewVideoOptions.WIDTH,
    height: PreviewVideoOptions.HEIGHT,
  };

  return (
    <article
      className="small-movie-card catalog__movies-card"
      id={id.toString()}
      onClick={onPreviewCardClick}
      onMouseEnter={onPreviewCardMouseEnter}
      onMouseLeave={onPreviewCardMouseLeave}
    >
      <div className="small-movie-card__image">
        {isPlaying ? renderPlayer(videoProps) : <img src={previewImage} alt={title} width="280" height="175" />}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};

export default React.memo(PreviewCard);
