import * as React from 'react';
import {CardsServiceConsumer} from '../../components/cards-service-context/cards-service-context';


const withCardsService = (Component) => {
  type Props = React.ComponentProps<typeof Component>

  const WithCardsService: React.FC<Props> = (props: Props) => {

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
