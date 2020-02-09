import React, {Component} from 'react';
import PropTypes from 'prop-types';
import PreviewCard from '../preview-card/preview-card.jsx';

export default class PreviewCardsList extends Component {
  render() {
    const {previewCardTitles} = this.props;
    const previewCardElements = previewCardTitles
      .map((title, i) => <PreviewCard key={`${i}-${title.slice(0, 2)}`} previewCardTitle={title} />);

    return (
      <div className="catalog__movies-list">
        {previewCardElements}
      </div>
    );
  }
}

PreviewCardsList.propTypes = {
  previewCardTitles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
