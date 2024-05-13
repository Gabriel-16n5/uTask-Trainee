import styled from 'styled-components';

export const DeleteContainer = styled.div`
    display:flex;
    justify-content: end;
`

export const DeleteButton = styled.button`
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
  margin-bottom: .5rem;
`;

export const KanbanContainer = styled.div`
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

export const SliderWrapper = styled.div`
  display: flex;
  transition: transform 0.5s ease;
  width: 100%;
  > :first-child {
    margin-left: 0;
  }
`;

export const SliderContainer = styled.div`
  display: flex;
  overflow: hidden;
  width: 80vw;
  justify-content: center;
  align-items: center;
`

export const ColumnMain = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  margin-bottom: 3rem;
  height:50vh;
  flex: 0 0 100%;
`;

export const Column = styled.div`
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

export const ColumnTitle = styled.h2`
  font-family: Poppins;
  font-size: 24px;
  font-weight: 500;
  line-height: 30px;
  text-align: left;
  color: ${(props) => (props.darkMode ? "#fafafa" : "")};
`;

export const CardContainer = styled.div`
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
  color: ${(props) => (props.darkMode ? "#fafafa" : "")};
`;

export const ExpandButton = styled.button`
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

export const ActionButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

export const ActionButton = styled.button`
  background-color: ${(props) => (props.darkMode ? "#3d3d3d" : "#ffffff")};
  color: #226ed8;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  font-size: 14px;
`;

export const Controls = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;

export const Button = styled.button`
  margin: 0 5px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;
