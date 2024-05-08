import styled from "styled-components"
import React, { useState } from "react"
import ImagemLogin from "../assets/Task management.svg"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

export default function SignInContainer() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function loginValidation(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    function submitLogin(e) {
        e.preventDefault();
        navigate("/home");
    }

    function handleVisibilityToggle() {
        setShowPassword(!showPassword);
    }

    return (
        <PageContainer>
            <ImgLogin src={ImagemLogin} alt="imagem de login" />
            <VerticalSeparator/>
            <LoginContainer>
                <Title>uTask 3.0</Title>
                <SingInContainer>
                    <form onSubmit={submitLogin}>
                        <div>
                            <p>E-mail</p>
                            <LoginInput
                                placeholder="Endereço de e-mail"
                                type="email"
                                name="email"
                                onChange={loginValidation}
                                value={formData.email}
                                required
                            />
                        </div>
                        <PasswordField>
                            <p>Senha</p>
                            <LoginInput
                                placeholder="Senha secreta"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                onChange={loginValidation}
                                value={formData.password}
                                required
                            />
                            <Icon className="material-icons" onClick={handleVisibilityToggle}>
                                {showPassword ? "visibility" : "visibility_off"}
                            </Icon>
                            <CustomLink to="/cadastro" >Esqueceu a senha?</CustomLink>
                        </PasswordField>

                        <LoginButton type="submit">Entrar</LoginButton>
                    </form>
                </SingInContainer>
                <HorizontalSeparator />
                <RegisterLink to="/cadastro">
                    Não tem cadastro ? Crie uma conta
                </RegisterLink>
            </LoginContainer>
        </PageContainer>
    )
}

const PasswordField = styled.div`
    display:flex;
    flex-direction: column;
    position: relative;
    @media screen and (max-width: 1023px), (max-height: 599px) {
        width:90vw;
}
`

const LoginInput = styled.input`
    width: 25vw;
    height: 3rem;
    border-radius: 8px;
    border: 1px solid #002D6C;
    padding-right: 30px;
    box-sizing: border-box;
    background: #EEF5FF;
    font-size:18px;
    padding-left: 10px;
    margin-bottom: 20px;
    @media screen and (max-width: 1023px), (max-height: 599px) {
        width:90vw;
}
`

const Icon = styled.span`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
`

const HorizontalSeparator = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    width: 14vw;
    height: 2px; 
    background-color: #3b5f91;
    position: relative;
`;


const VerticalSeparator = styled.div`
    width: 4px;
    height: 80vh;
    background-color: #9CC7FBB2;
    margin-left: 5rem;
    margin-right: 5rem;
    @media screen and (max-width: 1023px), (max-height: 599px) {
        display:none;
}
`;

const LoginButton = styled.button`
    margin-top:25px;
    width: 25vw;
    height: 3.5rem;
    border-radius: 20px;
    opacity: 0px;
    background: #226ED8;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
    @media screen and (max-width: 1023px), (max-height: 599px) {
        width:90vw;
}
`

const CustomLink = styled(Link)`
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #226ED8;
    margin-top:-15px;
`

const RegisterLink = styled(Link)`
    font-family: Poppins;
    font-size: 16px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    Color: #00122B;
`

const SingInContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        font-family: Poppins;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        margin-bottom:5px;
    }
`

const LoginContainer = styled.div`
    height: auto;
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1023px), (max-height: 599px) {
        height:100%;
        width: 90vw;
}
`

const ImgLogin = styled.img`
    width: 45vw;
    height: auto;
    @media screen and (max-width: 1023px), (max-height: 599px) {
        display:none;
}
`

const PageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    @media screen and (max-width: 1023px), (max-height: 599px) {
        flex-direction: column;
        width: auto;
        height: auto;
}
`;

const Title = styled.h1`
    color: #226ED8;
    font-family: Poppins, sans-serif;
    font-size: 62px;
    font-weight: 700;
    line-height: 63px;
    text-align: center;
    margin-bottom: 5vh;
    @media screen and (max-width: 1023px), (max-height: 599px) {
        font-size: 42px;
        margin-top: 5vh;
}
`
