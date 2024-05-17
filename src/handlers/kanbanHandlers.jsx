import axios from 'axios';
const apiUrl = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';

export const handleOptionsClick = (
  cardId,
  showActionButtons,
  setShowActionButtons,
  showDeleteButton,
  setShowDeleteButton
) => {
  setShowActionButtons(showActionButtons === cardId ? null : cardId);
  setShowDeleteButton(showDeleteButton === cardId ? null : cardId);
};

export const handleNextSlide = (setCurrentSlide, totalSlides) => {
  setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
};

export const handlePrevSlide = (setCurrentSlide, totalSlides) => {
  setCurrentSlide((prevSlide) => (prevSlide - 1 + totalSlides) % totalSlides);
};

export const handleExpandCard = (id, expandedCardId, setExpandedCardId) => {
  setExpandedCardId((prevState) => (id === prevState ? null : id));
};

export const handleAddCard = async (title, description, cards, setCards) => {
  if (!title.trim() && !description.trim()) return;

  try {
    const token = localStorage.getItem('Authorization');
    if (!token) {
      window.location.href = '/';
      return;
    }
    const result = await axios.post(
      `${apiUrl}/home`,
      { title, description },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(result);
  } catch (error) {
    console.error('Erro ao validar o token:', error);
    window.location.href = '/';
  }

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

export const handleMoveToAFazer = (
  id,
  cardsAndamento,
  setCardsAndamento,
  cards,
  setCards
) => {
  const movedCard = cardsAndamento.find((card) => card.id === id);
  setCardsAndamento((prevCardsAndamento) =>
    prevCardsAndamento.filter((card) => card.id !== id)
  );
  setCards((prevCards) => [...prevCards, movedCard]);
};

export const handleMoveToAndamento = (
  id,
  cards,
  setCards,
  cardsAndamento,
  setCardsAndamento
) => {
  const movedCard = cards.find((card) => card.id === id);
  setCards((prevCards) => prevCards.filter((card) => card.id !== id));
  setCardsAndamento((prevCardsAndamento) => [...prevCardsAndamento, movedCard]);
};

export const handleMoveToFeito = (
  id,
  cardsAndamento,
  setCardsAndamento,
  cardsFeito,
  setCardsFeito
) => {
  const movedCard = cardsAndamento.find((card) => card.id === id);
  setCardsAndamento((prevCardsAndamento) =>
    prevCardsAndamento.filter((card) => card.id !== id)
  );
  setCardsFeito((prevCardsFeito) => [...prevCardsFeito, movedCard]);
};

export const handleDeleteCardFromAndamento = (
  id,
  cardsAndamento,
  setCardsAndamento
) => {
  const updatedCards = cardsAndamento.filter((card) => card.id !== id);
  setCardsAndamento(updatedCards);
};

export const handleDeleteCardFromFeito = (id, cardsFeito, setCardsFeito) => {
  const updatedCards = cardsFeito.filter((card) => card.id !== id);
  setCardsFeito(updatedCards);
};

export const handleMoveToAndamentoFromFeito = (
  id,
  cardsFeito,
  setCardsFeito,
  cardsAndamento,
  setCardsAndamento
) => {
  const movedCard = cardsFeito.find((card) => card.id === id);
  setCardsFeito((prevCardsFeito) =>
    prevCardsFeito.filter((card) => card.id !== id)
  );
  setCardsAndamento((prevCardsAndamento) => [...prevCardsAndamento, movedCard]);
};

export const handleMoveToAFazerFromFeito = (
  id,
  cardsFeito,
  setCardsFeito,
  cards,
  setCards
) => {
  const movedCard = cardsFeito.find((card) => card.id === id);
  setCardsFeito((prevCardsFeito) =>
    prevCardsFeito.filter((card) => card.id !== id)
  );
  setCards((prevCards) => [...prevCards, movedCard]);
};
