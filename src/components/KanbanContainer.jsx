import React, { useState,} from 'react';
import {ActionButton, ActionButtonContainer, CardContainer, Column, ColumnHeader, ColumnMain, ColumnTitle, DeleteButton, DeleteContainer, DescriptionContainer, ExpandButton, KanbanContainer, PlusButton} from '../style/KanbanContainerCss';
import Swal from 'sweetalert2';
import { handleExpandCard,  handleAddCard,  handleDeleteCard,  handleMoveToAFazer,  handleMoveToAndamento,  handleMoveToFeito,  handleMoveToAndamentoFromFeito,  handleMoveToAFazerFromFeito,
} from '../handlers/kanbanHandlers';

const Kanban = (props) => {
  const { darkMode } = props;
  const [cards, setCards] = useState([]);
  const [cardsAndamento, setCardsAndamento] = useState([]);
  const [cardsFeito, setCardsFeito] = useState([]);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const columnData = [
    { title: 'A Fazer', cards: cards, setCards: setCards },
    { title: 'Em andamento', cards: cardsAndamento, setCards: setCardsAndamento },
    { title: 'Feito', cards: cardsFeito, setCards: setCardsFeito },
  ];

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
      {columnData.map((column, index) => (
        <ColumnMain key={index}>
          <ColumnHeader>
            <ColumnTitle darkMode={darkMode}>{column.title}</ColumnTitle>
            {column.title === 'A Fazer' && (
              <PlusButton onClick={openAddCardModal}>
                <span className="material-icons">control_point</span>
              </PlusButton>
            )}
          </ColumnHeader>
          <Column darkMode={darkMode}>
            {column.cards.map((card) => (
              <CardContainer key={card.id}>
                <h5>{card.title}</h5>
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
                <DeleteContainer>
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
                          <span className="material-icons">replay</span>
                        </ActionButton>
                      </>
                    )}
                  </ActionButtonContainer>
                  <DeleteButton darkMode={darkMode} onClick={() => handleDeleteCard(card.id, column.cards, column.setCards)}>
                    <span className="material-icons">delete</span>
                  </DeleteButton>
                </DeleteContainer>
              </CardContainer>
            ))}
          </Column>
        </ColumnMain>
      ))}
    </KanbanContainer>
  );
};

export default Kanban;