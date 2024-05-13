import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const KanbanMobile = (props) => {
  const { darkMode } = props;
  const [cards, setCards] = useState([]);
  const [cardsAndamento, setCardsAndamento] = useState([]);
  const [cardsFeito, setCardsFeito] = useState([]);
  const [newCardText, setNewCardText] = useState('');
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => Math.min(prevSlide + 1, 2));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => Math.max(prevSlide - 1, 0));
  };

  const handleExpandCard = (id) => {
    setExpandedCardId(id === expandedCardId ? null : id);
  };

  const handleAddCard = (title, description) => {
    if (!title.trim() && !description.trim()) return;

    const newCard = {
      id: Math.random().toString(36).substr(2, 9),
      title,
      description,
    };
    setCards([...cards, newCard]);
  };

  const handleDeleteCard = (id) => {
    const updatedCards = cards.filter((card) => card.id !== id);
    setCards(updatedCards);
  };

  const openAddCardModal = () => {
    Swal.fire({
      title: '<span style="color: #3867D6">Nova Task</span>',
      html: `
        <input id="swal-input1" class="swal2-input" placeholder="Título">
        <input id="swal-input2" class="swal2-input" placeholder="Descrição">
      `,
      showCloseButton: true,
      showConfirmButton: true,
      confirmButtonText: 'Criar Task',
      showLoaderOnConfirm: true,
      preConfirm: () => {
        const title = document.getElementById('swal-input1').value;
        const description = document.getElementById('swal-input2').value;
        return { title, description };
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        const { title, description } = result.value;
        handleAddCard(title, description);
      }
    });
  };

  const handleMoveToAFazer = (id) => {
    const movedCard = cardsAndamento.find((card) => card.id === id);
    setCardsAndamento(cardsAndamento.filter((card) => card.id !== id));
    setCards([...cards, movedCard]);
  };
  
  const handleMoveToAndamento = (id) => {
    const movedCard = cards.find((card) => card.id === id);
    setCards(cards.filter((card) => card.id !== id));
    setCardsAndamento([...cardsAndamento, movedCard]);
  };
  
  const handleMoveToFeito = (id) => {
    const movedCard = cardsAndamento.find((card) => card.id === id);
    setCardsAndamento(cardsAndamento.filter((card) => card.id !== id));
    setCardsFeito([...cardsFeito, movedCard]);
  };

  const handleDeleteCardFromAndamento = (id) => {
    const updatedCards = cardsAndamento.filter((card) => card.id !== id);
    setCardsAndamento(updatedCards);
  };
  
  const handleDeleteCardFromFeito = (id) => {
    const updatedCards = cardsFeito.filter((card) => card.id !== id);
    setCardsFeito(updatedCards);
  };

  const handleMoveToAndamentoFromFeito = (id) => {
    const movedCard = cardsFeito.find((card) => card.id === id);
    setCardsFeito(cardsFeito.filter((card) => card.id !== id));
    setCardsAndamento([...cardsAndamento, movedCard]);
  };

  const handleMoveToAFazerFromFeito = (id) => {
    const movedCard = cardsFeito.find((card) => card.id === id);
    setCardsFeito(cardsFeito.filter((card) => card.id !== id));
    setCards([...cards, movedCard]);
  };

  return (
    <KanbanContainer>
      <SliderContainer>
        <SliderWrapper style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        <ColumnMain>
          <ColumnHeader>
            <ColumnTitle darkMode={darkMode}>A Fazer</ColumnTitle>
            <PlusButton onClick={openAddCardModal}>
              <span className="material-icons">control_point</span>
            </PlusButton>
          </ColumnHeader>
          <Column darkMode={darkMode}>
            {cards.map((card) => (
              <CardContainer darkMode={darkMode} key={card.id}>
                  <h5>{card.title}</h5>
                  <DescriptionContainer darkMode={darkMode} isExpanded={expandedCardId === card.id}>
                      {card.description}
                  </DescriptionContainer>
                  <ExpandButton darkMode={darkMode} onClick={() => handleExpandCard(card.id)} isExpanded={expandedCardId === card.id}>
                      {expandedCardId === card.id ? 'Esconder descrição' : 'Ler mais'}
                  </ExpandButton>
                  <DeleteContainer>
                      <ActionButtonContainer>
                          <ActionButton darkMode={darkMode} onClick={() => handleMoveToAndamento(card.id)}><span class="material-icons">arrow_circle_right</span></ActionButton>
                      </ActionButtonContainer>
                      <DeleteButton darkMode={darkMode} onClick={() => handleDeleteCard(card.id)}>
                      <span className="material-icons">delete</span>
                      </DeleteButton>
                  </DeleteContainer>
              </CardContainer>
            ))}
          </Column>
        </ColumnMain>
        <ColumnMain>
          <ColumnHeader>
              <ColumnTitle darkMode={darkMode}>Em andamento</ColumnTitle>
          </ColumnHeader>
          <Column darkMode={darkMode}>
          {cardsAndamento.map((card) => (
              <CardContainer darkMode={darkMode} key={card.id}>
              <h5>{card.title}</h5>
              <DescriptionContainer darkMode={darkMode} isExpanded={expandedCardId === card.id}>
                  {card.description}
              </DescriptionContainer>
              <ExpandButton darkMode={darkMode} onClick={() => handleExpandCard(card.id)} isExpanded={expandedCardId === card.id}>
                  {expandedCardId === card.id ? 'Esconder descrição' : 'Ler mais'}
              </ExpandButton>
              <DeleteContainer>
                      <ActionButtonContainer>
                          <ActionButton darkMode={darkMode} onClick={() => handleMoveToAFazer(card.id)}><span class="material-icons">arrow_circle_left</span></ActionButton>
                          <ActionButton darkMode={darkMode} onClick={() => handleMoveToFeito(card.id)}><span class="material-icons">arrow_circle_right</span></ActionButton>
                      </ActionButtonContainer>
                      <DeleteButton darkMode={darkMode} onClick={() => handleDeleteCardFromAndamento(card.id)}><span className="material-icons">delete</span></DeleteButton>
              </DeleteContainer>
          </CardContainer>
            ))}
          </Column>
        </ColumnMain>
        <ColumnMain>
          <ColumnHeader>
              <ColumnTitle darkMode={darkMode}>Feito</ColumnTitle>
          </ColumnHeader>
          <Column darkMode={darkMode}>
          {cardsFeito.map((card) => (
              <CardContainer darkMode={darkMode} key={card.id}>
                  <h5>{card.title}</h5>
                  <DescriptionContainer darkMode={darkMode} isExpanded={expandedCardId === card.id}>
                      {card.description}
                  </DescriptionContainer>
                  <ExpandButton onClick={() => handleExpandCard(card.id)} isExpanded={expandedCardId === card.id}>
                      {expandedCardId === card.id ? 'Esconder descrição' : 'Ler mais'}
                  </ExpandButton>
                  <DeleteContainer>
                      <ActionButtonContainer>
                          <ActionButton darkMode={darkMode} onClick={() => handleMoveToAndamentoFromFeito(card.id)}><span class="material-icons">arrow_circle_left</span></ActionButton>
                          <ActionButton darkMode={darkMode} onClick={() => handleMoveToAFazerFromFeito(card.id)}><span class="material-icons">replay</span></ActionButton>
                      </ActionButtonContainer>
                      <DeleteButton darkMode={darkMode} onClick={() => handleDeleteCardFromFeito(card.id)}><span className="material-icons">delete</span></DeleteButton>
              </DeleteContainer>
              </CardContainer>
            ))}
          </Column>
        </ColumnMain>
        </SliderWrapper>
      </SliderContainer>
      <Controls>
        <Button onClick={handlePrevSlide}>Anterior</Button>
        <Button onClick={handleNextSlide}>Próximo</Button>
      </Controls>
    </KanbanContainer>
  );
};

const DeleteContainer = styled.div`
    display:flex;
    justify-content: end;
`

const DeleteButton = styled.button`
  display: flex;
  justify-content:center;
  align-items: center;
  padding-top: 8px;
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: ${(props) => (props.darkMode ? "#ffafaf" : "#DF0000")};
  .material-icons {
    font-size: 24px;
  }
`;

const PlusButton = styled.button`
  display: inline;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: #226ed8;
  .material-icons {
    font-size: 34px;
  }
`;

const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  margin-bottom: .5rem;
`;

const KanbanContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    display: none;
    @media screen and (max-width: 1280px){
        display: flex;
        flex-direction:column;
    }
`;

const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  > :first-child {
    margin-left: 0;
  }
`;

const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 80vw;
  justify-content: center;
  align-items: center;
`

const ColumnMain = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin-bottom: 3rem;
  height:50vh;
  flex: 0 0 100%;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 600px;
  background-color: ${(props) => (props.darkMode ? "#333333" : "#eeeeee")};
  border-radius: 20px 20px 20px 20px;
  align-items: center;
  padding-bottom: .3rem;
  overflow-y: auto;
  max-height: 600px;
`;

const ColumnTitle = styled.h2`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
  color: ${(props) => (props.darkMode ? "#fafafa" : "")};
`;

const CardContainer = styled.div`
    width: 85%;
    height: auto;
    background-color: ${(props) => (props.darkMode ? "#3d3d3d" : "#ffffff")};
    padding: 10px;
    border-radius: 20px;
    margin-bottom: 5px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
  p {
    font-family: Poppins;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;
    text-align: left;
    overflow-wrap: break-word;
    word-wrap: break-word;
    margin-left: 5px;
    margin-top: 5px;
  }

  h5 {
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    text-align: left;
    overflow-wrap: break-word; 
    word-wrap: break-word; 
    margin-left: 5px;
    color: ${(props) => (props.darkMode ? "#ffffff" : "")};
  }
`;

const DescriptionContainer = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  overflow-wrap: break-word;
  word-wrap: break-word;
  max-height: ${(props) => (props.isExpanded ? 'none' : '54px')};
  overflow: hidden;
  color: ${(props) => (props.darkMode ? "#fafafa" : "")};
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: ${(props) => (props.isExpanded ? '#002D6C' : props.darkMode ? '#fafafa' : '#141414')};
  font-family: Poppins;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: left;
  margin-top: 10px;
`;

const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const ActionButton = styled.button`
  background-color: ${(props) => (props.darkMode ? "#3d3d3d" : "#ffffff")};
  color: #226ed8;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default KanbanMobile;