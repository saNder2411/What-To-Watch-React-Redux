import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import Header from '../header/header.jsx';
import Logo from '../logo/logo.jsx';
import AddReviewBreadcrumbs from '../add-review-breadcrumbs/add-review-breadcrumbs.jsx';
import UserBlock from '../user-block/user-block.jsx';
import Poster from '../poster/poster.jsx';
import AddReviewForm from '../add-review-form/add-review-form.jsx';

import withAddReviewFormState from '../../hocs/with-add-review-form-state/with-add-review-form-state.jsx';

import {getCardsData} from '../../reducers/card-list/selectors.js';


const WrappedAddReviewForm = withAddReviewFormState(AddReviewForm);


const AddReviewScreen = ({selectedCardIdFromHistory, cardsData}) => {

  const selectedCard = cardsData.find(({id}) => +selectedCardIdFromHistory === id);
  const {title, posterImage, backgroundImage} = selectedCard;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <Header title={title} backgroundImage={backgroundImage}>
          <Logo />
          <UserBlock />
          <AddReviewBreadcrumbs title={title} selectedCardIdFromHistory={selectedCardIdFromHistory} />
        </Header>
        <Poster isAddReviewScreen posterImage={posterImage} title={title}/>
      </div>

      <WrappedAddReviewForm selectedCardIdFromHistory={selectedCardIdFromHistory} />
    </section>
  );
};

AddReviewScreen.propTypes = {
  selectedCardIdFromHistory: PropTypes.string.isRequired,
  cardsData: PropTypes.arrayOf(PropTypes.object.isRequired),
};

const mapStateToProps = (state) => ({
  cardsData: getCardsData(state),
});

export default connect(mapStateToProps)(AddReviewScreen);
