import * as React from 'react';
import {Link} from 'react-router-dom';


import {connect} from 'react-redux';
import compose from '../../hocs/compose/compose';
import withCardsService from '../../hocs/with-cards-service/with-cards-service';
import {getUserAuthStatus} from '../../reducers/user/selectors';
import {getSelectedCard} from '../../reducers/app-state/selectors';
import SendActions from '../../actions/send-actions/send-actions';

import {getAppRoute} from '../../utils/utils';
import {getUpdatedCardLoading, getUpdatedCardError} from '../../reducers/card-list/selectors';
import {DataTypes, Card} from '../../types';


type Props = {
  selectedCard: Card;
  isAuthorized: boolean;
  updateCard: (dataType: DataTypes, sentData: number, selectedCardId: number) => void;
  updatedCardLoading: boolean;
  updatedCardError: any | null;
}

const MyListButton: React.FC<Props> = ({selectedCard: {isFavorite, id}, isAuthorized, updateCard, updatedCardLoading, updatedCardError}) => {

  const iconButton = isFavorite ?
    <svg viewBox="0 0 18 14" width="18" height="14">
      <use xlinkHref="#in-list"></use>
    </svg> :
    <svg viewBox="0 0 19 20" width="19" height="20">
      <use xlinkHref="#add"></use>
    </svg>;

  const labelText = updatedCardLoading ? `Loading ...` : `My list`;
  const label = updatedCardError ? `Something has gone  wrong, try again later!` : labelText;

  return (
    <Link
      className="btn btn--list movie-card__button"
      to={getAppRoute().LOGIN}
      onClick={(evt) => {

        if (!isAuthorized) {
          return;
        }

        evt.preventDefault();
        const sentData = isFavorite ? 0 : 1;

        if (!updatedCardLoading) {
          updateCard(DataTypes.UPDATE_CARD, sentData, id);
        }
      }}>

      {iconButton}
      <span>{label}</span>
    </Link>
  );
};

const mapStateToProps = (state) => ({
  isAuthorized: getUserAuthStatus(state),
  selectedCard: getSelectedCard(state),
  updatedCardLoading: getUpdatedCardLoading(state),
  updatedCardError: getUpdatedCardError(state),
});

const mapDispatchToProps = (dispatch, ownProps) => {
  const {cardsService} = ownProps;
  return {
    updateCard: (dataType, sentData, selectedCardId) => dispatch(SendActions.sendData(cardsService)(dataType, sentData, selectedCardId)),
  };
};

export default compose(withCardsService, connect(mapStateToProps, mapDispatchToProps))(MyListButton);
