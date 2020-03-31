import * as React from 'react';

import {connect} from 'react-redux';
import {getScreen} from '../../reducers/app-state/selectors';

import {Screens} from '../../types';


type Props = {
  screen: Screens;
  posterImage: string;
  title: string;
}

const Poster: React.FC<Props> = ({screen, posterImage, title}) => {
  const cardScreenClassName = screen === Screens.CARD ? `movie-card__poster--big` : ``;
  const addReviewScreenClassName = screen === Screens.ADD_REVIEW ? `movie-card__poster--small` : ``;

  return (
    <div className={`movie-card__poster ${cardScreenClassName} ${addReviewScreenClassName}`}>
      <img src={`${posterImage ? posterImage : `img/the-grand-budapest-hotel-poster.jpg`}`} alt={title} width="218" height="327" />
    </div>
  );
};


const mapStateToProps = (state) => ({screen: getScreen(state)});

export default connect(mapStateToProps)(Poster);
