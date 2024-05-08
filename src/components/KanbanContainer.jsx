import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const Kanban = () => {
  const [cards, setCards] = useState([]);
  const [cardsAndamento, setCardsAndamento] = useState([]);
  const [cardsFeito, setCardsFeito] = useState([]);

  const [newCardText, setNewCardText] = useState('');

  const [expandedCardId, setExpandedCardId] = useState(null);

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
      <ColumnMain>
        <ColumnHeader>
          <ColumnTitle>A Fazer</ColumnTitle>
          <PlusButton onClick={openAddCardModal}>
            <span className="material-icons">control_point</span>
          </PlusButton>
        </ColumnHeader>
        <Column>
          {cards.map((card) => (
            <CardContainer key={card.id}>
                <h5>{card.title}</h5>
                <DescriptionContainer isExpanded={expandedCardId === card.id}>
                    {card.description}
                </DescriptionContainer>
                <ExpandButton onClick={() => handleExpandCard(card.id)} isExpanded={expandedCardId === card.id}>
                    {expandedCardId === card.id ? 'Esconder descrição' : 'Ler mais'}
                </ExpandButton>
                <DeleteContainer>
                    <ActionButtonContainer>
                        <ActionButton onClick={() => handleMoveToAndamento(card.id)}><span class="material-icons">arrow_circle_right</span></ActionButton>
                    </ActionButtonContainer>
                    <DeleteButton onClick={() => handleDeleteCard(card.id)}>
                    <span className="material-icons">delete</span>
                    </DeleteButton>
                </DeleteContainer>
            </CardContainer>
          ))}
        </Column>
      </ColumnMain>
      <ColumnMain>
        <ColumnHeader>
            <ColumnTitle>Em andamento</ColumnTitle>
        </ColumnHeader>
        <Column>
        {cardsAndamento.map((card) => (
            <CardContainer key={card.id}>
            <h5>{card.title}</h5>
            <DescriptionContainer isExpanded={expandedCardId === card.id}>
                {card.description}
            </DescriptionContainer>
            <ExpandButton onClick={() => handleExpandCard(card.id)} isExpanded={expandedCardId === card.id}>
                {expandedCardId === card.id ? 'Esconder descrição' : 'Ler mais'}
            </ExpandButton>
            <DeleteContainer>
                    <ActionButtonContainer>
                        <ActionButton onClick={() => handleMoveToAFazer(card.id)}><span class="material-icons">arrow_circle_left</span></ActionButton>
                        <ActionButton onClick={() => handleMoveToFeito(card.id)}><span class="material-icons">arrow_circle_right</span></ActionButton>
                    </ActionButtonContainer>
                    <DeleteButton onClick={() => handleDeleteCardFromAndamento(card.id)}><span className="material-icons">delete</span></DeleteButton>
            </DeleteContainer>
        </CardContainer>
          ))}
        </Column>
      </ColumnMain>
      <ColumnMain>
        <ColumnHeader>
            <ColumnTitle>Feito</ColumnTitle>
        </ColumnHeader>
        <Column>
        {cardsFeito.map((card) => (
            <CardContainer key={card.id}>
                <h5>{card.title}</h5>
                <DescriptionContainer isExpanded={expandedCardId === card.id}>
                    {card.description}
                </DescriptionContainer>
                <ExpandButton onClick={() => handleExpandCard(card.id)} isExpanded={expandedCardId === card.id}>
                    {expandedCardId === card.id ? 'Esconder descrição' : 'Ler mais'}
                </ExpandButton>
                <DeleteContainer>
                    <ActionButtonContainer>
                        <ActionButton onClick={() => handleMoveToAndamentoFromFeito(card.id)}><span class="material-icons">arrow_circle_left</span></ActionButton>
                        <ActionButton onClick={() => handleMoveToAFazerFromFeito(card.id)}><span class="material-icons">replay</span></ActionButton>
                    </ActionButtonContainer>
                    <DeleteButton onClick={() => handleDeleteCardFromFeito(card.id)}><span className="material-icons">delete</span></DeleteButton>
            </DeleteContainer>
            </CardContainer>
          ))}
        </Column>
      </ColumnMain>
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
  color: #DF0000;
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
`;

const ColumnMain = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin-right: 3rem;
  margin-bottom: 3rem;
  height:50vh;
  
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 600px;
  background-color: #eeeeee; 
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
  color: #141414;
`;

const CardContainer = styled.div`
  width: 85%;
  height: auto;
  background-color: #ffffff;
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
`;

const ExpandButton = styled.button`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: ${(props) => (props.isExpanded ? '#002D6C' : '#141414')};
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
  background-color: #ffffff;
  color: #226ed8;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
`;


export default Kanban;