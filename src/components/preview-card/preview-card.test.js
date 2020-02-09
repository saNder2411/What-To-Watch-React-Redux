import React from 'react';
import renderer from 'react-test-renderer';
import PreviewCard from './preview-card.jsx';

const previewCardTitle = `Bohemian Rhapsody`;

it(`Should PreviewCard render correctly`, () => {
  const markup = renderer
    .create(<PreviewCard previewCardTitle={previewCardTitle} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
