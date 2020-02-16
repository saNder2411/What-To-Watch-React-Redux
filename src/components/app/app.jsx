import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import Main from '../main/main.jsx';


export default class App extends PureComponent {
  constructor(props) {
    super(props);

    this._handlePreviewCardClick = this._handlePreviewCardClick.bind(this);
  }

  _handlePreviewCardClick(evt) {
    evt.preventDefault();
  }

  render() {
    return (
      <Main
        data={this.props}
        previewCardHandlers={[this._handlePreviewCardClick]}
      />
    );
  }
}

App.propTypes = {
  promoCardData: PropTypes.object.isRequired,
  cardsData: PropTypes.array.isRequired,
};
