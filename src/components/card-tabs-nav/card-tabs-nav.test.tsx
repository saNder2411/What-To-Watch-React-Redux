import * as React from 'react';
import * as renderer from 'react-test-renderer';
import CardTabsNav from './card-tabs-nav';
import {noop} from '../../utils/utils';

const cardMode = `overview`;
const handleTabsNavClick = noop;

it(`Should CardOverview render correctly`, () => {
  const markup = renderer
    .create(<CardTabsNav mode={cardMode} onTabsNavClick={handleTabsNavClick} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
