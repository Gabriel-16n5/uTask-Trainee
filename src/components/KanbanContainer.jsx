import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { handleExpandCard,  handleAddCard,  handleDeleteCard,  handleMoveToAFazer,  handleMoveToAndamento,  handleMoveToFeito,  handleDeleteCardFromAndamento,  handleDeleteCardFromFeito,  handleMoveToAndamentoFromFeito,  handleMoveToAFazerFromFeito,
} from '../handlers/kanbanHandlers';

const Kanban = (props) => {
  const { darkMode } = props;
  const [cards, setCards] = useState([]);
  const [cardsAndamento, setCardsAndamento] = useState([]);
  const [cardsFeito, setCardsFeito] = useState([]);
  const [newCardText, setNewCardText] = useState('');
  const [expandedCardId, setExpandedCardId] = useState(null);

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
        handleAddCard(title, description, cards, setCards);
      }
    });
  };

  return (
    <KanbanContainer>
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
                  <ExpandButton darkMode={darkMode} onClick={() => handleExpandCard(card.id, expandedCardId, setExpandedCardId)} isExpanded={expandedCardId === card.id}>
                    {expandedCardId === card.id ? 'Esconder descrição' : 'Ler mais'}
                  </ExpandButton>
                  <DeleteContainer>
                    <ActionButtonContainer>
                    <ActionButton darkMode={darkMode} onClick={() => handleMoveToAndamento(card.id, cards, setCards, cardsAndamento, setCardsAndamento)}><span class="material-icons">arrow_circle_right</span></ActionButton>
                    </ActionButtonContainer>
                    <DeleteButton darkMode={darkMode} onClick={() => handleDeleteCard(card.id, cards, setCards)}><span className="material-icons">delete</span></DeleteButton>
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
                  <ExpandButton darkMode={darkMode} onClick={() => handleExpandCard(card.id, expandedCardId, setExpandedCardId)} isExpanded={expandedCardId === card.id}>
                    {expandedCardId === card.id ? 'Esconder descrição' : 'Ler mais'}
                  </ExpandButton>
                  <DeleteContainer>
                    <ActionButtonContainer>
                      <ActionButton darkMode={darkMode} onClick={() => handleMoveToAFazer(card.id, cardsAndamento, setCardsAndamento, cards, setCards)}><span class="material-icons">arrow_circle_left</span></ActionButton>
                      <ActionButton darkMode={darkMode} onClick={() => handleMoveToFeito(card.id, cardsAndamento, setCardsAndamento, cardsFeito, setCardsFeito)}><span class="material-icons">arrow_circle_right</span></ActionButton>
                    </ActionButtonContainer>
                    <DeleteButton darkMode={darkMode} onClick={() => handleDeleteCardFromAndamento(card.id, cardsAndamento, setCardsAndamento)}><span className="material-icons">delete</span></DeleteButton>
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
                      <ActionButton darkMode={darkMode} onClick={() => handleMoveToAndamentoFromFeito(card.id, cardsFeito, setCardsFeito, cardsAndamento, setCardsAndamento)}><span class="material-icons">arrow_circle_left</span></ActionButton>
                      <ActionButton darkMode={darkMode} onClick={() => handleMoveToAFazerFromFeito(card.id, cardsFeito, setCardsFeito, cards, setCards)}><span class="material-icons">replay</span></ActionButton>
                    </ActionButtonContainer>
                    <DeleteButton darkMode={darkMode} onClick={() => handleDeleteCardFromFeito(card.id, cardsFeito, setCardsFeito)}><span className="material-icons">delete</span></DeleteButton>
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
    @media screen and (max-width: 1280px){
        display:none;
    }
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
    max-width:280px;
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


export default Kanban;