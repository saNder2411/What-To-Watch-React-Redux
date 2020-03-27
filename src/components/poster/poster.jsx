import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getScreen} from '../../reducers/app-state/selectors';

import {Screens} from '../../const';


const Poster = ({screen, posterImage, title}) => {
  const cardScreenClassName = screen === Screens.CARD ? `movie-card__poster--big` : ``;
  const addReviewScreenClassName = screen === Screens.ADD_REVIEW ? `movie-card__poster--small` : ``;

  return (
    <div className={`movie-card__poster ${cardScreenClassName} ${addReviewScreenClassName}`}>
      <img src={`${posterImage ? posterImage : `img/the-grand-budapest-hotel-poster.jpg`}`} alt={title} width="218" height="327" />
    </div>
  );
};

Poster.propTypes = {
  screen: PropTypes.string.isRequired,
  posterImage: PropTypes.string,
  title: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({screen: getScreen(state)});

export default connect(mapStateToProps)(Poster);
