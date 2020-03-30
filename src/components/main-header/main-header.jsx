import React from 'react';
import PropTypes from 'prop-types';

import ErrorIndicator from '../../components/error-indicator/error-indicator';
import Header from '../header/header';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import HeaderCardDesc from '../header-card-desc/header-card-desc';
import Poster from '../poster/poster';
import HeaderButtons from '../header-buttons/header-buttons';

import {connect} from 'react-redux';
import {getPromoCardData, getPromoError} from '../../reducers/promo-card/selectors';

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
