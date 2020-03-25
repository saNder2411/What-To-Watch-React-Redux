import React from 'react';

import Logo from '../logo/logo.jsx';
import UserBlock from '../user-block/user-block.jsx';
import PreviewCardList from '../preview-card-list/preview-card-list.jsx';
import Footer from '../footer/footer.jsx';

import compose from '../../hocs/compose/compose.js';
import withFetchData from '../../hocs/with-fetch-data/with-fetch-data.jsx';
import withActiveItem from '../../hocs/with-active-item/with-active-item.jsx';
import withPreviewCardListState from '../../hocs/with-preview-card-list-state/with-preview-card-list-state.jsx';

import {DataTypes, Screens} from '../../const.js';


const WrappedPreviewCardList = compose(withFetchData(DataTypes.FETCH_USER_CARDS_DATA), withActiveItem, withPreviewCardListState)(PreviewCardList);

const UserListScreen = () => {

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo toMain />
        <h1 className="page-title user-page__title">My list</h1>
        <UserBlock />
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <WrappedPreviewCardList screen={Screens.USER_LIST} />
      </section>

      <Footer>
        <Logo toMain isFooterLogo/>
      </Footer>
    </div>
  );
};

export default UserListScreen;
