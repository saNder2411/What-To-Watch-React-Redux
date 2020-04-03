import * as React from 'react';
import {connect} from 'react-redux';
import {getMouseEnterCardId} from '../../reducers/card-list-state/selectors';
import {VideoProps, HandleWithEvt, Handle} from '../../types';


const PreviewVideoOptions = {
  WIDTH: 280,
  HEIGHT: 175,
  IS_MUTED: true,
  IS_DELAY: true,
};

type PreviewCard = {
  id: number;
  title: string;
  previewImage: string;
  previewVideoSrc: string;
}

type Props = {
  mouseEnterCardId: number;
  previewCardData: PreviewCard;
  previewCardHandlers: Array<HandleWithEvt | Handle>;
  renderPlayer: (videoProps: VideoProps) => React.ReactNode;
}

const PreviewCard: React.FC<Props> = ({mouseEnterCardId, previewCardData, previewCardHandlers, renderPlayer}: Props) => {

  const {id, title, previewImage, previewVideoSrc} = previewCardData;
  const [onPreviewCardClick, onPreviewCardMouseEnter, onPreviewCardMouseLeave] = previewCardHandlers;
  const isPlaying = mouseEnterCardId === id;

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

const mapStateToProps = (state) => ({
  mouseEnterCardId: getMouseEnterCardId(state),
});

export default connect(mapStateToProps)(React.memo(PreviewCard));
