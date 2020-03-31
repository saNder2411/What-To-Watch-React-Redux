import * as React from 'react';

import ErrorIndicator from '../error-indicator/error-indicator';
import Header from '../header/header';
import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import HeaderCardDesc from '../header-card-desc/header-card-desc';
import Poster from '../poster/poster';
import HeaderButtons from '../header-buttons/header-buttons';

import {connect} from 'react-redux';
import {getPromoCardData, getPromoError} from '../../reducers/promo-card/selectors';
import {Card} from '../../types';


type Props = {
  promoError: any | null,
  promoCardData: Card;
}

const MainHeader: React.FC<Props> = ({promoError, promoCardData}) => {

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

const mapStateToProps = (state) => ({
  promoCardData: getPromoCardData(state),
  promoError: getPromoError(state),
});


export default connect(mapStateToProps)(MainHeader);
