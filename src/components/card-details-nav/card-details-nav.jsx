import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';

export default class CardDetailsNav extends PureComponent {
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
    const cardDetailsMode = evt.target.textContent.toLowerCase();
    this.props.onContentChange(cardDetailsMode);
  }

  render() {
    return (
      <nav className="movie-nav movie-card__nav">
        <ul
          onClick={this._handleNavClick}
          className="movie-nav__list">
          <li className="movie-nav__item movie-nav__item--active">
            <a href="#" className="movie-nav__link">Overview</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Details</a>
          </li>
          <li className="movie-nav__item">
            <a href="#" className="movie-nav__link">Reviews</a>
          </li>
        </ul>
      </nav>
    );
  }
}

CardDetailsNav.propTypes = {
  onContentChange: PropTypes.func.isRequired,
};
