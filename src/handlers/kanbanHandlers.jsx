export const handleNextSlide = (setCurrentSlide) => {
  setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, 2));
};

export const handlePrevSlide = (setCurrentSlide) => {
  setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
};

export const handleExpandCard = (id, expandedCardId, setExpandedCardId) => {
  setExpandedCardId((prevState) => (id === prevState ? null : id));
};

export const handleAddCard = (title, description, cards, setCards) => {
  if (!title.trim() && !description.trim()) return;

  const newCard = {
    id: Math.random().toString(36).substr(2, 9),
    title,
    description,
  };
  setCards((prevCards) => [...prevCards, newCard]);
};

export const handleDeleteCard = (id, cards, setCards) => {
  const updatedCards = cards.filter((card) => card.id !== id);
  setCards(updatedCards);
};

export const handleMoveToAFazer = (id, cardsAndamento, setCardsAndamento, cards, setCards) => {
  const movedCard = cardsAndamento.find((card) => card.id === id);
  setCardsAndamento((prevCardsAndamento) => prevCardsAndamento.filter((card) => card.id !== id));
  setCards((prevCards) => [...prevCards, movedCard]);
};

export const handleMoveToAndamento = (id, cards, setCards, cardsAndamento, setCardsAndamento) => {
  const movedCard = cards.find((card) => card.id === id);
  setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  setCardsAndamento((prevCardsAndamento) => [...prevCardsAndamento, movedCard]);
};

export const handleMoveToFeito = (id, cardsAndamento, setCardsAndamento, cardsFeito, setCardsFeito) => {
  const movedCard = cardsAndamento.find((card) => card.id === id);
  setCardsAndamento((prevCardsAndamento) => prevCardsAndamento.filter((card) => card.id !== id));
  setCardsFeito((prevCardsFeito) => [...prevCardsFeito, movedCard]);
};

export const handleDeleteCardFromAndamento = (id, cardsAndamento, setCardsAndamento) => {
  const updatedCards = cardsAndamento.filter((card) => card.id !== id);
  setCardsAndamento(updatedCards);
};

export const handleDeleteCardFromFeito = (id, cardsFeito, setCardsFeito) => {
  const updatedCards = cardsFeito.filter((card) => card.id !== id);
  setCardsFeito(updatedCards);
};

export const handleMoveToAndamentoFromFeito = (id, cardsFeito, setCardsFeito, cardsAndamento, setCardsAndamento) => {
  const movedCard = cardsFeito.find((card) => card.id === id);
  setCardsFeito((prevCardsFeito) => prevCardsFeito.filter((card) => card.id !== id));
  setCardsAndamento((prevCardsAndamento) => [...prevCardsAndamento, movedCard]);
};

export const handleMoveToAFazerFromFeito = (id, cardsFeito, setCardsFeito, cards, setCards) => {
  const movedCard = cardsFeito.find((card) => card.id === id);
  setCardsFeito((prevCardsFeito) => prevCardsFeito.filter((card) => card.id !== id));
  setCards((prevCards) => [...prevCards, movedCard]);
};