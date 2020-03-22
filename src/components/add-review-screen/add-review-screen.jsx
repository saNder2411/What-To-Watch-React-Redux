import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import Logo from '../logo/logo.jsx';
import AddReviewBreadcrumbs from '../add-review-breadcrumbs/add-review-breadcrumbs.jsx';
import UserBlock from '../user-block/user-block.jsx';
import Poster from '../poster/poster.jsx';
import AddReviewForm from '../add-review-form/add-review-form.jsx';

import {getCardsData} from '../../reducers/card-list/selectors.js';


const AddReviewScreen = ({selectedCardId, cardsData}) => {

  const selectedCard = cardsData.find(({id}) => +selectedCardId === id);
  const {title, posterImage, backgroundImage} = selectedCard;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <Header title={title} backgroundImage={backgroundImage}>
          <Logo toMain />
          <UserBlock />
          <AddReviewBreadcrumbs title={title} selectedCardId={selectedCardId} />
        </Header>
        <Poster isAddReviewScreen posterImage={posterImage} title={title}/>
      </div>

      <AddReviewForm />
    </section>
  );
};

AddReviewScreen.propTypes = {
  selectedCardId: PropTypes.string.isRequired,
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired),
};

const mapStateToProps = (state) => ({cardsData: getCardsData(state)});

export default connect(mapStateToProps)(AddReviewScreen);
