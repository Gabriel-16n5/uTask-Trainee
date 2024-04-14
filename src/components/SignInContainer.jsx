import styled from "styled-components"
import React from "react"
import ImagemLogin from "../assets/Task management.svg"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

export default function SignInContainer() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    function loginValidation(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      }

      function submitLogin(e) {
        e.preventDefault();
        navigate("/home");
      }

    return (
      <PageContainer>
        <ImgLogin src={ImagemLogin} alt="imagem de login" />
        <LoginContainer>
            <Title>uTask 3.0</Title>
            <SingInContainer>
                <form onSubmit={submitLogin}>
                    <div>
                        <p>E-mail</p>
                        <input 
                        placeholder="E-mail" 
                        type="email"
                        name="email"
                        onChange={loginValidation}
                        value={formData.email}
                        required
                        />
                    </div>
                    <div>
                        <p>Senha</p>
                        <input 
                        placeholder="Senha" 
                        type="password"
                        name="password"
                        onChange={loginValidation}
                        value={formData.password}
                        required 
                        />
                         <div><Link to="/cadastro" style={{ fontSize: '14px' }}>Esqueceu a senha?</Link></div>
                    </div>

                <button type="submit">Entrar</button>
                </form>
            </SingInContainer>
        <Link to="/cadastro">
            Não tem cadastro ? Crie uma conta
        </Link>
        </LoginContainer>
      </PageContainer>
    )
  }
  
  const CustomLink = styled(Link)`
  font-size: 6px;
`;

  const SingInContainer = styled.section`
  /* height: 100vh; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

  const LoginContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `

  const ImgLogin = styled.img`
    width: 40vw;
    height: auto;
  `

  const PageContainer = styled.div`
      display: flex;
      justify-content:space-around;
      width: 100vw;
      /* flex-direction: column;
      align-items: center;
      font-family: 'Roboto';
      font-size: 24px;
      text-align: center;
      color: #293845;
      margin-top: 30px;
      padding-top: 70px; */
  `
  
  const Title = styled.h1`
    color: #226ED8;
    font-family: Poppins, sans-serif;
    font-size: 42px;
    font-weight: 700;
    line-height: 63px;
    text-align: center;
  `;
  