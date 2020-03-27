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
import {getSelectedCard} from '../../reducers/app-state/selectors';

const WrappedAddReviewForm = withAddReviewFormState(AddReviewForm);


const AddReviewScreen = ({selectedCard}) => {
  const {title, posterImage, backgroundImage} = selectedCard;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <Header title={title} backgroundImage={backgroundImage}>
          <Logo />
          <UserBlock />
          <AddReviewBreadcrumbs title={title} />
        </Header>
        <Poster posterImage={posterImage} title={title}/>
      </div>

      <WrappedAddReviewForm />
    </section>
  );
};

AddReviewScreen.propTypes = {
  selectedCard: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({selectedCard: getSelectedCard(state)});

export default connect(mapStateToProps)(AddReviewScreen);
