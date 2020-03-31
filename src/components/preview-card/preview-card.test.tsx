import * as React from 'react';
import * as renderer from 'react-test-renderer';
import PreviewCard from './preview-card';
import {noop} from '../../utils/utils';

const previewCardData = {
  id: 1,
  title: `Bohemian Rhapsody`,
  previewImage: `bohemian-rhapsody`,
  previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  isPlaying: false,
};

const previewCardHandlers = [noop, noop, noop];

const renderPlayer = () => Promise.resolve();

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
