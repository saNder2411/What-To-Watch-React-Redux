import * as React from 'react';
import {configure, mount} from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import {Provider} from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import PreviewCard from './preview-card';

configure({adapter: new Adapter()});

const mockStore = configureStore([thunk]);

const store = mockStore({
  cardListState: {
    genre: `All genre`,
    mouseEnterCardId: -1,
    showingCardsAmount: 8,
  },
});

const mock = {
  id: 1,
  title: `Bohemian Rhapsody`,
  previewImage: `img/bohemian-rhapsody.jpg`,
  previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const mockEvt = {
  target: {
    id: mock.id,
  },
};

const onClick = jest.fn();
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();
const renderPlayer = jest.fn();

it(`When you hover over the card, the id of the card enters the handler`, () => {
  const {id} = mock;
  const previewCard = mount(
      <Provider store={store}>
        <PreviewCard
          previewCardData={mock}
          previewCardHandlers={[onClick, onMouseEnter, onMouseLeave]}
          renderPlayer={renderPlayer}
        />
      </Provider>
  );

  previewCard.find(`.small-movie-card`).simulate(`mouseenter`, mockEvt);

  expect(onMouseEnter.mock.calls.length).toBe(1);
  expect(onMouseEnter.mock.calls[0][0]).toHaveProperty(`target.id`, id);
});

it(`Should call onPreviewCardClick when preview card be pressed`, () => {
  const previewCard = mount(
      <Provider store={store}>
        <PreviewCard
          previewCardData={mock}
          previewCardHandlers={[onClick, onMouseEnter, onMouseLeave]}
          renderPlayer={renderPlayer}
        />
      </Provider>
  );

  previewCard.find(`.small-movie-card`).simulate(`click`);

  expect(onClick.mock.calls.length).toBe(1);
});
