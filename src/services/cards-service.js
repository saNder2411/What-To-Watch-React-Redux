export default class CardsService {

  constructor(API) {
    this._API = API;
  }

  _parseCard(data) {

    return {
      id: data[`id`],
      title: data[`name`],
      posterImage: data[`poster_image`],
      previewImage: data[`preview_image`],
      backgroundImage: data[`background_image`],
      backgroundColor: data[`background_color`],
      description: data[`description`],
      rating: data[`rating`],
      scoresCount: data[`scores_count`],
      director: data[`director`],
      starring: data[`starring`],
      runtime: data[`run_time`],
      genre: data[`genre`],
      released: data[`released`],
      isFavorite: data[`is_favorite`],
      videoSrc: data[`video_link`],
      previewVideoSrc: data[`preview_video_link`],
    };
  }

  _parseUserData(data) {

    return {
      id: data[`id`],
      email: data[`email`],
      name: data[`name`],
      avatarSrc: data[`avatar_url`],
    };
  }

  getPromoCard() {

    return this._API.get(`/films/promo`)
      .then((res) => this._parseCard(res.data));
  }

  getCardList() {

    return this._API.get(`/films`)
      .then((res) => res.data.map(this._parseCard));
  }

  getReviews(id) {

    return this._API.get(`/comments/${id}`)
      .then((res) => res.data);
  }

  getUserAuthStatus() {

    return this._API.get(`/login`)
      .then((res) => this._parseUserData(res.data));
  }

  sendUserData(userData) {

    return this._API.post(`/login`, userData)
      .then((res) => this._parseUserData(res.data));
  }

  sendReview(id, review) {

    return this._API.post(`/comments/${id}`, review)
      .then((res) => res.data);
  }

  getUserCardList() {

    return this._API.get(`/favorite`)
      .then((res) => res.data.map(this._parseCard));
  }

  updateFavoriteCard(id, data) {

    return this._API.post(`/favorite/${id}/${data}`)
      .then((res) => this._parseCard(res.data));
  }
}
