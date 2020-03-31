import * as React from 'react';
import {connect} from 'react-redux';

import Header from '../header/header';
import Logo from '../logo/logo';
import AddReviewBreadcrumbs from '../add-review-breadcrumbs/add-review-breadcrumbs';
import UserBlock from '../user-block/user-block';
import Poster from '../poster/poster';
import AddReviewForm from '../add-review-form/add-review-form';

import withAddReviewFormState from '../../hocs/with-add-review-form-state/with-add-review-form-state';
import {getSelectedCard} from '../../reducers/app-state/selectors';

import {Card} from '../../types';

const WrappedAddReviewForm = withAddReviewFormState(AddReviewForm);

type Props = {
  selectedCard: Card;
}

const AddReviewScreen: React.FC<Props> = ({selectedCard}) => {
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

const mapStateToProps = (state) => ({selectedCard: getSelectedCard(state)});

export default connect(mapStateToProps)(AddReviewScreen);
