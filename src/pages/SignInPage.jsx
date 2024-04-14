import styled from "styled-components"
import React from "react"
import SimpleNavBar from "../components/SimpleNavBar";

export default function SignInPage() {
  return (
    <PageContainer>
      <SimpleNavBar/>
      <Title>Login</Title>
    </PageContainer>
  )
}

const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Roboto';
    font-size: 24px;
    text-align: center;
    color: #293845;
    margin-top: 30px;
    padding-top: 70px;
`

const Title = styled.h1`
  font-size: 24px;
  margin-bottom: 16px;
`;
