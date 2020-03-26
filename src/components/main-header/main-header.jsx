import React from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../../components/error-indicator/error-indicator.jsx';
import Header from '../header/header.jsx';
import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';
import HeaderCardDesc from '../header-card-desc/header-card-desc.jsx';
import Poster from '../poster/poster.jsx';
import HeaderButtons from '../header-buttons/header-buttons.jsx';

import {connect} from 'react-redux';
import {getPromoCardData, getPromoError} from '../../reducers/promo-card/selectors.js';

const MainHeader = ({promoError, promoCardData}) => {

  if (promoError) {
    return <ErrorIndicator error={promoError} />;
  }

  const {title, genre, released, posterImage, backgroundImage} = promoCardData;

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
  promoCardData: PropTypes.object.isRequired,
  promoError: PropTypes.object,
};

const mapStateToProps = (state) => ({
  promoCardData: getPromoCardData(state),
  promoError: getPromoError(state),
});


export default connect(mapStateToProps)(MainHeader);
