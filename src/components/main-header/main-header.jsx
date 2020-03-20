import React from 'react';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';
import HeaderCardDesc from '../header-card-desc/header-card-desc.jsx';
import Poster from '../poster/poster.jsx';
import HeaderButtons from '../header-buttons/header-buttons.jsx';

const MainHeader = ({title, genre, released, posterImage, backgroundImage}) => {

  return (
    <section className="movie-card">
      <Header title={title} backgroundImage={backgroundImage}>
        <Logo />
        <UserBlock />
      </Header>
      <div className="movie-card__wrap">
        <div className="movie-card__info">
          <Poster posterImage={posterImage} title={title}/>
          <HeaderCardDesc title={title} genre={genre} released={released}>
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
  released: PropTypes.number.isRequired,
  posterImage: PropTypes.string.isRequired,
  backgroundImage: PropTypes.string.isRequired
};


export default MainHeader;
