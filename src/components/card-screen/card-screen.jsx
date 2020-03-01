import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import Logo from '../logo/logo.jsx';
import CardTabs from '../card-tabs/card-tabs.jsx';
import WrappedPreviewCardList from '../../hocs/with-filtering-similar-cards/with-filtering-similar-cards.jsx';

const CardScreen = ({activeCardId, cardsData}) => {
  const cardData = cardsData.find(({id}) => activeCardId === id);
  const {overviewData: {title}, detailsData: {genre, release}} = cardData;
  const yearRelease = new Date(release).getFullYear();

  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel" />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header movie-card__head">

            <Logo isLinkToMain />

            <div className="user-block">
              <div className="user-block__avatar">
                <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
              </div>
            </div>
          </header>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{title}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{yearRelease}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                </button>
                <a href="add-review.html" className="btn movie-card__button">Add review</a>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
            </div>

            <CardTabs data={cardData} />

          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <WrappedPreviewCardList
            cardData={cardData}
            cardsData={cardsData}
          />
        </section>

        <footer className="page-footer">
          <Logo isLinkToMain isFooterLogo/>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

CardScreen.propTypes = {
  activeCardId: PropTypes.number.isRequired,
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired),
};

export default CardScreen;
