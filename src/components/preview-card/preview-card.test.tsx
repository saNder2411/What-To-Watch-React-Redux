import * as React from 'react';
import * as renderer from 'react-test-renderer';
import {noop} from '../../utils/utils';
import PreviewCard from './preview-card';


const previewCardData = {
  id: 1,
  title: `Bohemian Rhapsody`,
  previewImage: `bohemian-rhapsody`,
  previewVideoSrc: `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
};

const previewCardHandlers = [noop, noop, noop];

const renderPlayer = () => [];

describe(`Render PreviewCard`, () => {
  it(`Should PreviewCard render correctly without video`, () => {
    const markup = renderer.create(
        <PreviewCard
          isPlaying={false}
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

  it(`Should PreviewCard render correctly with video`, () => {
    const markup = renderer.create(
        <PreviewCard
          isPlaying={true}
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
});
