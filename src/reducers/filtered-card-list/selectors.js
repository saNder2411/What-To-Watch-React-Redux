const getGenre = ({filteredCardList: {genre}}) => genre;

const getFilteredCards = ({filteredCardList: {filteredCards}}) => filteredCards;

const getShowingCardsAmount = ({filteredCardList: {showingCardsAmount}}) => showingCardsAmount;

export {getGenre, getFilteredCards, getShowingCardsAmount};
