import React from 'react';
import renderer from 'react-test-renderer';
import CardTabsNav from './card-tabs-nav';

const cardMode = `overview`;
const handleTabsNavClick = () => {};

it(`Should CardOverview render correctly`, () => {
  const markup = renderer
    .create(<CardTabsNav mode={cardMode} onTabsNavClick={handleTabsNavClick} />)
    .toJSON();

  expect(markup).toMatchSnapshot();
});
