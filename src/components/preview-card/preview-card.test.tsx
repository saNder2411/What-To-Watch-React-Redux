import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import CardsService from '../../services/cards-service';
import createAPI from '../../api';
import {CardsServiceProvider} from '../cards-service-context/cards-service-context';
import thunk from 'redux-thunk';
import {noop} from '../../utils/utils';

import PreviewCard from './preview-card';


const API = createAPI(noop);
const cardsService = new CardsService(API);
const mockStore = configureStore([thunk]);

const store = mockStore({
  cardListState: {
    genre: `All genre`,
    mouseEnterCardId: -1,
    showingCardsAmount: 8,
  },
});

const previewCardData = {
  id: 1,
  title: `Bohemian Rhapsody`,
  previewImage: `bohemian-rhapsody`,
  previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const previewCardHandlers = [noop, noop, noop];

const renderPlayer = () => [];

it(`Should PreviewCard render correctly`, () => {
  const markup = renderer.create(
      <Provider store={store}>
        <CardsServiceProvider value={cardsService}>
          <BrowserRouter>
            <Switch>
              <Route path='/' exact >
                <PreviewCard
                  previewCardData={previewCardData}
                  previewCardHandlers={previewCardHandlers}
                  renderPlayer={renderPlayer}
                />
              </Route>
            </Switch>
          </BrowserRouter>
        </CardsServiceProvider>
      </Provider>,
      {
        createNodeMock: () => {
          return {};
        }
      }
  )
  .toJSON();

  expect(markup).toMatchSnapshot();
});
