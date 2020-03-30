import React from 'react';

import Logo from '../logo/logo';
import UserBlock from '../user-block/user-block';
import PreviewCardList from '../preview-card-list/preview-card-list';
import Footer from '../footer/footer';

import compose from '../../hocs/compose/compose';
import withFetchData from '../../hocs/with-fetch-data/with-fetch-data';
import withActiveItem from '../../hocs/with-active-item/with-active-item';
import withPreviewCardListState from '../../hocs/with-preview-card-list-state/with-preview-card-list-state';

import {DataTypes} from '../../const';


const WrappedPreviewCardList = compose(withFetchData(DataTypes.FETCH_USER_CARDS_DATA), withActiveItem, withPreviewCardListState)(PreviewCardList);

const UserListScreen = () => {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <WrappedPreviewCardList />
      </section>

      <Footer>
        <Logo isFooterLogo/>
      </Footer>
    </div>
  );
};

export default UserListScreen;
