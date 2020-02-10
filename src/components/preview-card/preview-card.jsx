import React, {Component} from 'react';
import PropTypes from 'prop-types';

export default class PreviewCard extends Component {
  render() {
    const {previewCardTitle, onPreviewCardTitleClick} = this.props;
    const previewCardImgSrcValue = `img/${
      previewCardTitle
      .slice()
      .split(` `)
      .map((str) => str[str.length - 1] === `:` ? str.slice(0, -1) : str)
      .join(`-`)
      .toLowerCase()
    }.jpg`;

    return (
      <article className="small-movie-card catalog__movies-card">
        <div className="small-movie-card__image">
          <img src={previewCardImgSrcValue} alt={previewCardTitle} width="280" height="175" />
        </div>
        <h3 className="small-movie-card__title">
          <a
            onClick={onPreviewCardTitleClick}
            className="small-movie-card__link"
            href="movie-page.html"
          >
            {previewCardTitle}
          </a>
        </h3>
      </article>
    );
  }
}

PreviewCard.propTypes = {
  previewCardTitle: PropTypes.string.isRequired,
  onPreviewCardTitleClick: PropTypes.func.isRequired,
};
