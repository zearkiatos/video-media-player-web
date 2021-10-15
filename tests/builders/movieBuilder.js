import BaseBuilder from "./baseBuilder";
class MovieBuilder extends BaseBuilder {
  constructor() {
    super();
    this.adult = false;
    this.backdrop_path = "/7WJjFviFBffEJvkAms4uWwbcVUk.jpg";
    this.genre_ids = [12, 14, 35, 28];
    this.id = 451048;
    this.original_language = "en";
    this.original_title = "Jungle Cruise";
    this.overview =
      "Dr. Lily Houghton enlists the aid of wisecracking skipper Frank Wolff to take her down the Amazon in his dilapidated boat. Together, they search for an ancient tree that holds the power to heal – a discovery that will change the future of medicine.";
    this.popularity = 917.824;
    this.poster_path = "/9dKCd55IuTT5QRs989m9Qlb7d2B.jpg";
    this.release_date = "2021-07-28";
    this.title = "Jungle Cruise";
    this.video = false;
    this.vote_average = 7.8;
    this.vote_count = 2929;
  }
}

export default MovieBuilder;
