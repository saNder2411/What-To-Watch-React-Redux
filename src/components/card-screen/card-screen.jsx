import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import CardTabs from '../card-tabs/card-tabs.jsx';
import PreviewCardsList from '../preview-cards-list/preview-cards-list.jsx';
import withFilteringSimilarCards from '../../hocs/with-filtering-similar-cards/with-filtering-similar-cards.jsx';

const WrappedPreviewCardList = withFilteringSimilarCards(PreviewCardsList);

const CardScreen = ({data: {cardData, cardsData}, onScreenChange}) => {
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
            <div className="logo">
              <a
                onClick={(evt) => {
                  evt.preventDefault();
                  onScreenChange(-1);
                }}
                href="main.html"
                className="logo__link"
              >
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </a>
            </div>

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
            onScreenChange={onScreenChange}
          />
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a
              onClick={(evt) => {
                evt.preventDefault();
                onScreenChange(-1);
              }}
              href="main.html"
              className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2019 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </Fragment>
  );
};

CardScreen.propTypes = {
  data: PropTypes.shape({
    cardData: PropTypes.shape({
      overviewData: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }).isRequired,
      detailsData: PropTypes.shape({
        genre: PropTypes.string.isRequired,
        release: PropTypes.number.isRequired,
      }).isRequired,
    }).isRequired,
    cardsData: PropTypes.arrayOf(PropTypes.object.isRequired),
  }),
  onScreenChange: PropTypes.func.isRequired,
};

export default CardScreen;
