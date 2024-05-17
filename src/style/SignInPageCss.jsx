import styled from 'styled-components';

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';
  font-size: 24px;
  text-align: center;
  color: #293845;
  @media screen and (max-width: 1023px), (max-height: 599px) {
    width: 100%;
    height: 100%;
  }
`;
