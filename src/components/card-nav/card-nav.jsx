import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {CardMode} from '../../const.js';

export default class CardNav extends PureComponent {
  constructor(props) {
    super(props);
    this.state = null;

    this._handleNavClick = this._handleNavClick.bind(this);
  }

  _handleNavClick(evt) {
    evt.preventDefault();
    if (evt.target.tagName !== `A`) {
      return;
    }
    const {target: {textContent}} = evt;

    this.props.onContentChange(textContent.toLowerCase());
  }

  render() {
    const {mode} = this.props;
    return (
      <nav className="movie-nav movie-card__nav">
        <ul
          onClick={this._handleNavClick}
          className="movie-nav__list">
          <li className={`${`movie-nav__item`} ${CardMode.OVERVIEW === mode ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li className={`${`movie-nav__item`} ${CardMode.DETAILS === mode ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li className={`${`movie-nav__item`} ${CardMode.REVIEWS === mode ? `movie-nav__item--active` : ``}`}>
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
    );
  }
}

CardNav.propTypes = {
  onContentChange: PropTypes.func.isRequired,
  mode: PropTypes.string.isRequired,
};
