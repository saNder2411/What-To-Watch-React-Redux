type Response = {
  data: Array<{}>;
}

interface API {
  get: (arg: string) => Promise<Response>;
  post: (arg1: string, arg2: {} | void) => Promise<Response>;
}

export default class CardsService {
  private API: API;

  constructor(API) {
    this.API = API;
  }

  private parseCard(data) {

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

  private parseUserData(data) {

    return {
      id: data[`id`],
      email: data[`email`],
      name: data[`name`],
      avatarSrc: data[`avatar_url`],
    };
  }

  getPromoCard() {

    return this.API.get(`/films/promo`)
      .then((res) => this.parseCard(res.data));
  }

  getCardList() {

    return this.API.get(`/films`)
      .then((res) => res.data.map(this.parseCard));
  }

  getReviews(id) {

    return this.API.get(`/comments/${id}`)
      .then((res) => res.data);
  }

  getUserAuthStatus() {

    return this.API.get(`/login`)
      .then((res) => this.parseUserData(res.data));
  }

  sendUserData(userData) {

    return this.API.post(`/login`, userData)
      .then((res) => this.parseUserData(res.data));
  }

  sendReview(id, review) {

    return this.API.post(`/comments/${id}`, review)
      .then((res) => res.data);
  }

  getUserCardList() {

    return this.API.get(`/favorite`)
      .then((res) => res.data.map(this.parseCard));
  }

  updateFavoriteCard(id, data) {

    return this.API.post(`/favorite/${id}/${data}`)
      .then((res) => this.parseCard(res.data));
  }
}
