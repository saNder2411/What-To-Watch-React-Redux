import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import withCardsService from '../with-cards-service/with-cards-service.jsx';

const withData = (Component) => {
  class WithData extends PureComponent {
    render() {
      const {cardsService} = this.props;

      return (
        <Component {...this.props} cardsService={cardsService} />
      );
    }
  }

  WithData.propTypes = {
    cardsService: PropTypes.object.isRequired,
  };

  return WithData;
};

export default withCardsService(withData);
