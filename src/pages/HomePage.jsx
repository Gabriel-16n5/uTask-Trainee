import styled from "styled-components"
import React from "react"
import MainNavBar from "../components/MainNavBar";
import FooterBar from "../components/Footer";
import icon from "../assets/Icone.png"
import Kanban from "../components/KanbanContainer"

export default function HomePage() {
    return (
      <>
        <MainNavBar/>
          <PageContainer>
            <FraseDoDiaContainer>
              <Icon><img src={icon} alt="icon"></img></Icon>
              <FraseDoDiaContent>
                  <FraseDoDiaTitle>Frase do dia</FraseDoDiaTitle>
                  <FraseDoDia>Se você quer um pedacinho do paraíso, acredite em Deus. Mas se você quer conquistar o mundo, acredite em você porque Deus já te deu tudo o que você precisa para você vencer.</FraseDoDia>
              </FraseDoDiaContent>
          </FraseDoDiaContainer>
          <Kanban/>
          </PageContainer>
        <FooterBar/>
      </>
    )
  }
  
  const Icon = styled.span`
  margin-right: 10px;
  img{
    height: 64px;
    width: 64px;
  }
  `;

  const FraseDoDiaTitle = styled.h4`
    margin: 0;
    font-family: Poppins;
    font-size: 22px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    margin-bottom: 10px;
  `;

  const FraseDoDia = styled.p`
      font-family: Poppins;
      font-size: 20px;
      font-weight: 400;
      line-height: 1.5;
      text-align: start;
      
  `;

  const FraseDoDiaContainer = styled.div`
  background-color: #FFFFFF;
  display: flex;
  margin-top: 10rem;
  padding: 20px;
  border-radius: 5px;
  max-width: 920px;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 2px 2px 10px 2px #0000000A;
`;

  const FraseDoDiaContent = styled.div`
    display: flex;
    flex-direction:column;
  `;

  const PageContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: start;
      justify-content: start;
      font-family: 'Roboto';
      font-size: 24px;
      text-align: center;
      background-color:#fafafa;
      padding-left: 10vw;
      min-height: calc(100vh - 52px);
  `
  
  const Title = styled.h1`
    font-size: 24px;
    margin-bottom: 16px;
  `;
  