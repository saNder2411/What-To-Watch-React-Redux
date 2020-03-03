import React, {PureComponent} from 'react';
import {CardsServiceConsumer} from '../../components/cards-service-context/cards-service-context.js';

const withCardsService = (Component) => {
  class WithCardsService extends PureComponent {
    render() {
      return (
        <CardsServiceConsumer>
          {
            (cardsService) => <Component {...this.props} cardsService={cardsService} />
          }
        </CardsServiceConsumer>
      );
    }

  }

  return WithCardsService;
};

export default withCardsService;
