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

  _parseUserInfo(data) {
    return {
      id: data[`id`],
      email: data[`email`],
      name: data[`name`],
      avatarSrc: data[`avatar_url`],
    };
  }

  _handleError(res) {
    if (res.status < 200 || res.status > 299) {
      throw new Error(`Could not fetch, received ${res.status}`);
    }

    return res;
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

  getAuthorizationStatus() {
    return this._API.get(`/login`)
      .then((res) => this._parseUserInfo(res.data));
  }
}
