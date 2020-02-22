import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PreviewCard from './preview-card.jsx';

configure({adapter: new Adapter()});

const mock = {
  id: 1,
  title: `Bohemian Rhapsody`,
  poster: `img/bohemian-rhapsody.jpg`,
  previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  isPlaying: false,
};

const mockEvt = {
  currentTarget: {
    id: mock.id,
  },
};

const onClick = jest.fn();
const onMouseEnter = jest.fn();
const onMouseLeave = jest.fn();
const renderPlayer = jest.fn();

it(`When you hover over the card, the id of the card enters the handler`, () => {
  const {id} = mock;
  const previewCard = shallow(
      <PreviewCard
        previewCardData={mock}
        previewCardHandlers={[onClick, onMouseEnter, onMouseLeave]}
        renderPlayer={renderPlayer}
      />
  );

  previewCard.simulate(`mouseenter`, mockEvt);

  expect(onMouseEnter.mock.calls.length).toBe(1);
  expect(onMouseEnter.mock.calls[0][0]).toHaveProperty(`currentTarget.id`, id);
});

it(`Should call onPreviewCardClick when preview card be pressed`, () => {
  const previewCard = shallow(
      <PreviewCard
        previewCardData={mock}
        previewCardHandlers={[onClick, onMouseEnter, onMouseLeave]}
        renderPlayer={renderPlayer}
      />
  );

  previewCard.simulate(`click`);

  expect(onClick.mock.calls.length).toBe(1);
});
