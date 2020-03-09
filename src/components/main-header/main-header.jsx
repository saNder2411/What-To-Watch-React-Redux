import React from 'react';
import PropTypes from 'prop-types';
import Header from '../header/header.jsx';
import HeaderCardDesc from '../header-card-desc/header-card-desc.jsx';
import Poster from '../poster/poster.jsx';
import HeaderButtons from '../header-buttons/header-buttons.jsx';

const MainHeader = ({title, genre, date, poster}) => {

  return (
    <section className="movie-card">
      <Header />
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <Poster poster={poster}/>
          <HeaderCardDesc title={title} genre={genre} date={date}>
            <HeaderButtons />
          </HeaderCardDesc>
        </div>
      </div>
    </section>
  );
};

MainHeader.propTypes = {
  title: PropTypes.string,
  genre: PropTypes.string,
  date: PropTypes.number,
  poster: PropTypes.string,
};


export default MainHeader;
