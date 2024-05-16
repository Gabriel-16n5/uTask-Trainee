import React, { useEffect, useState,} from 'react';
import styled from 'styled-components';
import {ActionButton, ActionButtonContainer, CardContainer, Column, ColumnHeader, ColumnMain, ColumnTitle, DeleteButton, DeleteContainer, DescriptionContainer, ExpandButton, KanbanContainer, PlusButton} from '../style/KanbanContainerCss';
import Swal from 'sweetalert2';
import { handleExpandCard,  handleAddCard,  handleDeleteCard,  handleMoveToAFazer,  handleMoveToAndamento,  handleMoveToFeito,  handleMoveToAndamentoFromFeito,  handleMoveToAFazerFromFeito,
} from '../handlers/kanbanHandlers';

export const OptionsButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: ${(props) =>
    props.darkMode
      ? props.showDeleteButton
        ? "#226ed8"
        : "#fafafa"
      : props.showDeleteButton
      ? "#232323"
      : "#226ed8"};
  .material-icons {
    font-size: 24px;
  }
`;

const Kanban = (props) => {
  const { darkMode } = props;
  const { tasks } = props;
  const [cards, setCards] = useState([]);
  const [cardsAndamento, setCardsAndamento] = useState([]);
  const [cardsFeito, setCardsFeito] = useState([]);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [showDeleteButton, setShowDeleteButton] = useState(null);
  const [showActionButtons, setShowActionButtons] = useState(null);
  // const apiUrl = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';

  const columnData = [
    { title: 'A Fazer', cards: cards, setCards: setCards },
    { title: 'Em andamento', cards: cardsAndamento, setCards: setCardsAndamento },
    { title: 'Feito', cards: cardsFeito, setCards: setCardsFeito },
  ];

  useEffect(() => {
    console.log(tasks);
  },[tasks, cards]);

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

  const handleOptionsClick = (cardId) => {
    setShowActionButtons(showActionButtons === cardId ? null : cardId);
    setShowDeleteButton(showDeleteButton === cardId ? null : cardId);
  };

  return (
    <KanbanContainer>
      {columnData.map((column, index) => (
        <ColumnMain key={index}>
          <ColumnHeader>
            <ColumnTitle darkMode={darkMode}>{column.title}</ColumnTitle>
            {column.title === 'A Fazer' && (
              <PlusButton onClick={openAddCardModal}>
                <span className="material-icons">add_circle_outline</span>
              </PlusButton>
            )}
          </ColumnHeader>
          <Column darkMode={darkMode}>
            {column.cards.map((card) => (
              <CardContainer darkMode={darkMode} key={card.id}>
                <h5>{card.title}<OptionsButton darkMode={darkMode} showDeleteButton={showDeleteButton} onClick={() => handleOptionsClick(card.id)}><span className="material-icons">more_vert</span></OptionsButton></h5>
                <DescriptionContainer darkMode={darkMode} isExpanded={expandedCardId === card.id}>
                  {card.description}
                </DescriptionContainer>
                <ExpandButton
                  darkMode={darkMode}
                  onClick={() => handleExpandCard(card.id, expandedCardId, setExpandedCardId)}
                  isExpanded={expandedCardId === card.id}
                >
                  {expandedCardId === card.id ? 'Esconder descrição' : 'Ler mais'}
                </ExpandButton>
                {showActionButtons !== card.id && (
                      <ActionButtonContainer>
                        {column.title === 'A Fazer' && (
                          <ActionButton
                            darkMode={darkMode}
                            onClick={() => handleMoveToAndamento(card.id, cards, setCards, cardsAndamento, setCardsAndamento)}
                          >
                            <span className="material-icons">arrow_circle_right</span>
                          </ActionButton>
                        )}
                        {column.title === 'Em andamento' && (
                          <>
                            <ActionButton
                              darkMode={darkMode}
                              onClick={() => handleMoveToAFazer(card.id, cardsAndamento, setCardsAndamento, cards, setCards)}
                            >
                              <span className="material-icons">arrow_circle_left</span>
                            </ActionButton>
                            <ActionButton
                              darkMode={darkMode}
                              onClick={() => handleMoveToFeito(card.id, cardsAndamento, setCardsAndamento, cardsFeito, setCardsFeito)}
                            >
                              <span className="material-icons">arrow_circle_right</span>
                            </ActionButton>
                          </>
                        )}
                        {column.title === 'Feito' && (
                          <>
                            <ActionButton
                              darkMode={darkMode}
                              onClick={() =>
                                handleMoveToAndamentoFromFeito(card.id, cardsFeito, setCardsFeito, cardsAndamento, setCardsAndamento)
                              }
                            >
                              <span className="material-icons">arrow_circle_left</span>
                            </ActionButton>
                            <ActionButton
                              darkMode={darkMode}
                              onClick={() => handleMoveToAFazerFromFeito(card.id, cardsFeito, setCardsFeito, cards, setCards)}
                            >
                              <span className="material-icons">replay_circle_filled</span>
                            </ActionButton>
                          </>
                        )}
                      </ActionButtonContainer>
                    )}
                    {showActionButtons === card.id && (
                      <DeleteContainer>
                        <DeleteButton darkMode={darkMode} onClick={() => handleDeleteCard(card.id, column.cards, column.setCards)}>
                          <span className="material-icons">delete_outline</span>
                          Excluir
                        </DeleteButton>
                      </DeleteContainer>
                    )}
              </CardContainer>
            ))}
          </Column>
        </ColumnMain>
      ))}
    </KanbanContainer>
  );
};

export default Kanban;