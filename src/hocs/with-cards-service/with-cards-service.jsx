import React from 'react';
import {CardsServiceConsumer} from '../../components/cards-service-context/cards-service-context';


const withCardsService = (Component) => {

  const WithCardsService = (props) => {

    return (
      <CardsServiceConsumer>
        {
          (cardsService) => <Component {...props} cardsService={cardsService} />
        }
      </CardsServiceConsumer>
    );
  };

  return WithCardsService;
};

export default withCardsService;
