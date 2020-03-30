import * as React from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';
import {getSelectedCardId} from '../../reducers/app-state/selectors';

import {getAppRoute} from '../../utils/utils';


type Props = {
  title: string;
  selectedCardId: number;
}

const AddReviewBreadcrumbs: React.FC<Props> = ({title, selectedCardId}) => {

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={getAppRoute(selectedCardId).CARDS} className="breadcrumbs__link">{title}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = (state) => ({selectedCardId: getSelectedCardId(state)});

export default connect(mapStateToProps)(AddReviewBreadcrumbs);

