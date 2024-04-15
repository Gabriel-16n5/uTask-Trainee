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
`

const LoginInput = styled.input`
    width: 374px;
    height: 40px;
    gap: 0px;
    border-radius: 8px;
    border: 1px solid #002D6C;
    padding-right: 30px;
    box-sizing: border-box;
`

const Icon = styled.span`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
`

const HorizontalSeparator = styled.div`
    margin-top:30px;
    margin-bottom:30px;
    width: 170px;
    height: 2px;
    background-color: #3B5F91;
`;

const LoginButton = styled.button`
    margin-top:25px;
    width: 374px;
    height: 45px;
    top: 414px;
    left: 774px;
    gap: 0px;
    border-radius: 20px;
    opacity: 0px;
    background: #226ED8;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: #FFFFFF;
`

const CustomLink = styled(Link)`
    font-family: Poppins;
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
    color: #226ED8;
`

const RegisterLink = styled(Link)`
    font-family: Poppins;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    text-align: left;
    Color: #00122B;
`

const SingInContainer = styled.section`
    /* height: 100vh; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    p{
        font-family: Poppins;
        font-size: 16px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
    }
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
`

const Title = styled.h1`
    color: #226ED8;
    font-family: Poppins, sans-serif;
    font-size: 42px;
    font-weight: 700;
    line-height: 63px;
    text-align: center;
`
