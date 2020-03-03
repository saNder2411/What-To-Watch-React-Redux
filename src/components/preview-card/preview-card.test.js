import React from 'react';
import renderer from 'react-test-renderer';
import PreviewCard from './preview-card.jsx';

const previewCardData = {
  id: 1,
  title: `Bohemian Rhapsody`,
  previewPoster: `bohemian-rhapsody`,
  previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  isPlaying: false,
};

const previewCardHandlers = [() => {}, () => {}, () => {}];

const renderPlayer = () => {};

it(`Should PreviewCard render correctly`, () => {
  const markup = renderer
    .create(
        <PreviewCard
          previewCardData={previewCardData}
          previewCardHandlers={previewCardHandlers}
          renderPlayer={renderPlayer}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    )
    .toJSON();

  expect(markup).toMatchSnapshot();
});
