import styled from 'styled-components';

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
        ? '#226ed8'
        : '#fafafa'
      : props.showDeleteButton
        ? '#232323'
        : '#226ed8'};
  .material-icons {
    font-size: 24px;
  }
`;

export const DeleteContainer = styled.div`
  display: flex;
  justify-content: end;
`;

export const DeleteButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  background-color: ${(props) => (props.darkMode ? '#535353' : '#ffffff')};
  box-shadow: 0px 0px 4px 0px #00000040;
  border-radius: 8px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.darkMode ? '#2c2c2c' : '#ffffff')};
  cursor: pointer;
  color: ${(props) => (props.darkMode ? '#ffafaf' : '#DF0000')};
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  text-align: left;
  .material-icons {
    font-size: 24px;
  }
`;

export const PlusButton = styled.button`
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

export const ColumnHeader = styled.div`
  display: flex;
  justify-content: space-between;
  min-height: 40px;
  margin-bottom: 0.5rem;
`;

export const KanbanContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  @media screen and (max-width: 1280px), screen and (max-height: 720px) {
    display: none;
  }
`;

export const ColumnMain = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin-right: 3rem;
  margin-bottom: 3rem;
  height: 50vh;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  height: 600px;
  background-color: ${(props) => (props.darkMode ? '#333333' : '#eeeeee')};

  border-radius: 20px 20px 20px 20px;
  align-items: center;
  padding-bottom: 0.3rem;
  overflow-y: auto;
  max-height: 600px;
`;

export const ColumnTitle = styled.h2`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
  color: ${(props) => (props.darkMode ? '#fafafa' : '')};
`;

export const CardContainer = styled.div`
  width: 85%;
  height: auto;
  max-width: 280px;
  background-color: ${(props) => (props.darkMode ? '#3d3d3d' : '#ffffff')};
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
    word-break: break-word;
    margin-left: 5px;
    margin-top: 5px;
  }

  h5 {
    display: flex;
    justify-content: space-between;
    font-family: Poppins;
    font-size: 18px;
    font-weight: 600;
    line-height: 21px;
    text-align: left;
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
    margin-left: 5px;
    color: ${(props) => (props.darkMode ? '#ffffff' : '')};
  }
`;

export const DescriptionContainer = styled.p`
  font-family: Poppins;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  overflow-wrap: break-word;
  word-wrap: break-word;
  max-height: ${(props) => (props.isExpanded ? 'none' : '54px')};
  overflow: hidden;
  color: ${(props) => (props.darkMode ? '#fafafa' : '')};
`;

export const ExpandButton = styled.button`
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  color: ${(props) =>
    props.isExpanded ? '#002D6C' : props.darkMode ? '#fafafa' : '#141414'};
  font-family: Poppins;
  font-size: 12px;
  font-weight: 300;
  line-height: 18px;
  text-align: left;
  margin-top: 10px;
`;

export const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 10px;
`;

export const ActionButton = styled.button`
  background-color: ${(props) => (props.darkMode ? '#3d3d3d' : '#ffffff')};
  color: #226ed8;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
`;
