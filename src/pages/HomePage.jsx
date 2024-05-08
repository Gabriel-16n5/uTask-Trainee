import styled from "styled-components"
import React from "react"
import MainNavBar from "../components/MainNavBar";
import FooterBar from "../components/Footer";
import icon from "../assets/Icone.png"
import Kanban from "../components/KanbanContainer"

export default function HomePage() {
    return (
          <PageContainer>
            <MainNavBar/>
            <FraseDoDiaContainerMobile>
              <Icon><img src={icon} alt="icon"></img></Icon>
              <FraseDoDiaTitleMobile>Frase do dia</FraseDoDiaTitleMobile>
            </FraseDoDiaContainerMobile>
            <FraseDoDiaContainer>
              <Icon><img src={icon} alt="icon"></img></Icon>
              <FraseDoDiaContent>
                  <FraseDoDiaTitle>Frase do dia</FraseDoDiaTitle>
                  <FraseDoDia>Se você quer um pedacinho do paraíso, acredite em Deus. Mas se você quer conquistar o mundo, acredite em você porque Deus já te deu tudo o que você precisa para você vencer.</FraseDoDia>
              </FraseDoDiaContent>
            </FraseDoDiaContainer>
            <Kanban/>
            <FooterBar/>
          </PageContainer>
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
    font-family: Poppins;
    font-size: 22px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
  `;

const FraseDoDiaTitleMobile = styled.h4`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    line-height: 18px;
    text-align: left;
    color: #FFFFFF;
`;

  const FraseDoDia = styled.p`
      font-family: Poppins;
      font-size: 19px;
      font-weight: 400;
      line-height: 1.5;
      text-align: start;
  `;

  const FraseDoDiaContainer = styled.div`
  background-color: #FFFFFF;
  display: flex;
  padding: 20px;
  border-radius: 5px;
  max-width: 920px;
  border-radius: 20px 20px 20px 20px;
  box-shadow: 2px 2px 10px 2px #0000000A;
  margin-bottom:20px;
  height:15vh;
  margin-top:12vh;
  @media screen and (max-width: 1279px), (max-height: 719px) {
        display:none;
}
`;

  const FraseDoDiaContainerMobile = styled.div`
    background-color: #FFD569;
    display: flex;
    justify-content:start;
    align-items:center;
    padding: 20px;
    border-radius: 5px;
    width: 70vw;
    max-width: 600px;
    border-radius: 5px 5px 5px 5px;
    box-shadow: 2px 2px 10px 2px #0000000A;
    margin-bottom:20px;
    height:5vh;
    margin-top:12vh;
    @media screen and (max-width: 1279px), (max-height: 719px) {
          display:show;
}
`;

  const FraseDoDiaContent = styled.div`
    display: flex;
    flex-direction:column;
  `;

  const PageContainer = styled.div`
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height:100vh;
      width:100vw;
  `