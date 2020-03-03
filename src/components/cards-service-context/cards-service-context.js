import {createContext} from 'react';

const {
  Provider: CardsServiceProvider,
  Consumer: CardsServiceConsumer
} = createContext();

export {CardsServiceProvider, CardsServiceConsumer};
