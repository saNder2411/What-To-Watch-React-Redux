import React from 'react';
import renderer from 'react-test-renderer';
import PreviewCard from './preview-card.jsx';

const previewCardData = {
  id: 1,
  title: `Bohemian Rhapsody`,
  poster: `img/bohemian-rhapsody.jpg`,
};

const previewCardHandlers = [() => {}, () => {}];

it(`Should PreviewCard render correctly`, () => {
  const markup = renderer
    .create(<PreviewCard previewCardData={previewCardData} previewCardHandlers={previewCardHandlers} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
