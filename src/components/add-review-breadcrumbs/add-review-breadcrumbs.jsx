import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const AddReviewBreadcrumbs = ({title, selectedCardId}) => {

  return (
    <nav className="breadcrumbs">
      <ul className="breadcrumbs__list">
        <li className="breadcrumbs__item">
          <Link to={`/cards/${selectedCardId}`} className="breadcrumbs__link">{title}</Link>
        </li>
        <li className="breadcrumbs__item">
          <a className="breadcrumbs__link">Add review</a>
        </li>
      </ul>
    </nav>
  );
};

AddReviewBreadcrumbs.propTypes = {
  title: PropTypes.string.isRequired,
  selectedCardId: PropTypes.string.isRequired,
};

export default AddReviewBreadcrumbs;

