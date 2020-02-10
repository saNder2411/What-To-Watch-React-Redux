import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from './main.jsx';

Enzyme.configure({
  adapter: new Adapter(),
});

it(`Should call onPreviewCardTitleClick when preview card title be pressed`, () => {
  const previewCardTitleHandler = jest.fn();

  const promoCardData = {
    title: `True Detective`,
    genre: `Triller`,
    date: `2019`,
  };

  const previewCardTitles = [
    `Bohemian Rhapsody`,
    `Macbeth`,
    `Aviator`,
    `We need to talk about Kevin`,
    `What We Do in the Shadows`,
    `Revenant`,
    `Johnny English`,
    `Shutter Island`,
  ];

  const main = mount(
      <Main
        promoCardData={promoCardData}
        previewCardTitles={previewCardTitles}
        onPreviewCardTitleClick={previewCardTitleHandler}
      />
  );

  const firstPreviewCardTitle = main.find(`.small-movie-card__link`).first();

  firstPreviewCardTitle.simulate(`click`);

  expect(previewCardTitleHandler.mock.calls.length).toBe(1);

});
