import React, { useEffect, useState } from 'react';
import {
  OptionsButton,
  ActionButton,
  ActionButtonContainer,
  CardContainer,
  Column,
  ColumnHeader,
  ColumnMain,
  ColumnTitle,
  DeleteButton,
  DeleteContainer,
  DescriptionContainer,
  ExpandButton,
  KanbanContainer,
  PlusButton,
} from '../style/KanbanContainerCss';
import {
  handleExpandCard,
  handleAddCard,
  handleDeleteCard,
  handleMoveToAFazer,
  handleMoveToAndamento,
  handleMoveToFeito,
  handleMoveToAndamentoFromFeito,
  handleMoveToAFazerFromFeito,
  handleOptionsClick,
} from '../handlers/kanbanHandlers';
import { openAddCardModalWeb } from '../utils/Modals';

const Kanban = (props) => {
  const { darkMode } = props;
  const { tasks } = props;
  const [cards, setCards] = useState([]);
  const [cardsAndamento, setCardsAndamento] = useState([]);
  const [cardsFeito, setCardsFeito] = useState([]);
  const [expandedCardId, setExpandedCardId] = useState(null);
  const [showDeleteButton, setShowDeleteButton] = useState(null);
  const [showActionButtons, setShowActionButtons] = useState(null);
  const columnData = [
    { title: 'A Fazer', cards: cards, setCards: setCards },
    {
      title: 'Em andamento',
      cards: cardsAndamento,
      setCards: setCardsAndamento,
    },
    { title: 'Feito', cards: cardsFeito, setCards: setCardsFeito },
  ];

  useEffect(() => {
    console.log(tasks);
  }, [tasks, cards]);

  return (
    <KanbanContainer>
      {columnData.map((column, index) => (
        <ColumnMain key={index}>
          <ColumnHeader>
            <ColumnTitle darkMode={darkMode}>{column.title}</ColumnTitle>
            {column.title === 'A Fazer' && (
              <PlusButton
                onClick={() =>
                  openAddCardModalWeb(cards, setCards, handleAddCard)
                }
              >
                <span className="material-icons">add_circle_outline</span>
              </PlusButton>
            )}
          </ColumnHeader>
          <Column darkMode={darkMode}>
            {column.cards.map((card) => (
              <CardContainer darkMode={darkMode} key={card.id}>
                <h5>
                  {card.title}
                  <OptionsButton
                    darkMode={darkMode}
                    showDeleteButton={showDeleteButton}
                    onClick={() =>
                      handleOptionsClick(
                        card.id,
                        showActionButtons,
                        setShowActionButtons,
                        showDeleteButton,
                        setShowDeleteButton
                      )
                    }
                  >
                    <span className="material-icons">more_vert</span>
                  </OptionsButton>
                </h5>
                <DescriptionContainer
                  darkMode={darkMode}
                  isExpanded={expandedCardId === card.id}
                >
                  {card.description}
                </DescriptionContainer>
                <ExpandButton
                  darkMode={darkMode}
                  onClick={() =>
                    handleExpandCard(card.id, expandedCardId, setExpandedCardId)
                  }
                  isExpanded={expandedCardId === card.id}
                >
                  {expandedCardId === card.id
                    ? 'Esconder descrição'
                    : 'Ler mais'}
                </ExpandButton>
                {showActionButtons !== card.id && (
                  <ActionButtonContainer>
                    {column.title === 'A Fazer' && (
                      <ActionButton
                        darkMode={darkMode}
                        onClick={() =>
                          handleMoveToAndamento(
                            card.id,
                            cards,
                            setCards,
                            cardsAndamento,
                            setCardsAndamento
                          )
                        }
                      >
                        <span className="material-icons">
                          arrow_circle_right
                        </span>
                      </ActionButton>
                    )}
                    {column.title === 'Em andamento' && (
                      <>
                        <ActionButton
                          darkMode={darkMode}
                          onClick={() =>
                            handleMoveToAFazer(
                              card.id,
                              cardsAndamento,
                              setCardsAndamento,
                              cards,
                              setCards
                            )
                          }
                        >
                          <span className="material-icons">
                            arrow_circle_left
                          </span>
                        </ActionButton>
                        <ActionButton
                          darkMode={darkMode}
                          onClick={() =>
                            handleMoveToFeito(
                              card.id,
                              cardsAndamento,
                              setCardsAndamento,
                              cardsFeito,
                              setCardsFeito
                            )
                          }
                        >
                          <span className="material-icons">
                            arrow_circle_right
                          </span>
                        </ActionButton>
                      </>
                    )}
                    {column.title === 'Feito' && (
                      <>
                        <ActionButton
                          darkMode={darkMode}
                          onClick={() =>
                            handleMoveToAndamentoFromFeito(
                              card.id,
                              cardsFeito,
                              setCardsFeito,
                              cardsAndamento,
                              setCardsAndamento
                            )
                          }
                        >
                          <span className="material-icons">
                            arrow_circle_left
                          </span>
                        </ActionButton>
                        <ActionButton
                          darkMode={darkMode}
                          onClick={() =>
                            handleMoveToAFazerFromFeito(
                              card.id,
                              cardsFeito,
                              setCardsFeito,
                              cards,
                              setCards
                            )
                          }
                        >
                          <span className="material-icons">
                            replay_circle_filled
                          </span>
                        </ActionButton>
                      </>
                    )}
                  </ActionButtonContainer>
                )}
                {showActionButtons === card.id && (
                  <DeleteContainer>
                    <DeleteButton
                      darkMode={darkMode}
                      onClick={() =>
                        handleDeleteCard(card.id, column.cards, column.setCards)
                      }
                    >
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
