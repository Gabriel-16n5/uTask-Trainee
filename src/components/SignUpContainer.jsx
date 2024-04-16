import styled from "styled-components"
import React, { useState } from "react"
import ImagemRegister from "../assets/Tasks complete.svg"
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"

export default function SignUpContainer() {
    const [formData, setFormData] = useState({ userName: '', email: '', password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const navigate = useNavigate();

    function registerValidation(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (name === "confirmPassword") {
            setPasswordsMatch(value === formData.password);
        }
    }

    function submitRegister(e) {
        e.preventDefault();
        Swal.fire({
            title: "Conta criada com sucesso",
            text: "Um instante, iremos te redirecionar ao login !",
            icon: "success",
            showConfirmButton: false,
            timer: 5500,
        });
        navigate("/");
    }

    function handleVisibilityToggle() {
        setShowPassword(!showPassword);
    }

    return (
        <PageContainer>
            <RegisterContainer>
                <Title>uTask 3.0</Title>
                <HorizontalSeparator />
                <SubTitle>Crie uma conta</SubTitle>
                <RegisterContent>
                    <form onSubmit={submitRegister}>
                    <div>
                            <p>Nome do usuário</p>
                            <LoginInput
                                placeholder="Seu nome de usuário"
                                type="userName"
                                name="userName"
                                onChange={registerValidation}
                                value={formData.userName}
                                required
                            />
                        </div>
                        <div>
                            <p>E-mail</p>
                            <LoginInput
                                placeholder="Endereço de e-mail"
                                type="email"
                                name="email"
                                onChange={registerValidation}
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
                                onChange={registerValidation}
                                value={formData.password}
                                required
                            />
                            <Icon className="material-icons" onClick={handleVisibilityToggle}>
                                {showPassword ? "visibility" : "visibility_off"}
                            </Icon>
                        </PasswordField>
                        <PasswordField>
                            <p>Confirme a senha</p>
                            <LoginInput
                                placeholder="Senha secreta"
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                onChange={registerValidation}
                                value={formData.confirmPassword}
                                required
                            />
                            <Icon className="material-icons" onClick={handleVisibilityToggle}>
                                {showPassword ? "visibility" : "visibility_off"}
                            </Icon>
                        </PasswordField>
                        {!passwordsMatch && <PasswordMismatchMessage>Senhas não combinam, tente novamente.</PasswordMismatchMessage>}
                        <RegisterButton type="submit" disabled={!passwordsMatch}>Criar Cadastro</RegisterButton>
                    </form>
                </RegisterContent>
            </RegisterContainer>
            <ImgRegister src={ImagemRegister} alt="imagem de login" />
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
    background: #EEF5FF;
`

const Icon = styled.span`
    position: absolute;
    top: 50%;
    right: 10px;
    transform: translateY(-50%);
    cursor: pointer;
`

const HorizontalSeparator = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 170px;
    height: 2px;
    background-color: #3B5F91;
    margin-left: auto;
    margin-right: auto;
`;

const RegisterButton = styled.button`
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

const RegisterContent = styled.section`
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

const RegisterContainer = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
`

const ImgRegister = styled.img`
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

const SubTitle = styled.h2`
    font-family: Poppins;
    font-size: 20px;
    font-weight: 600;
    line-height: 30px;
    text-align: left;
    color: #00122A;
`

const PasswordMismatchMessage = styled.h3`
    color: #820000;
    font-family: Poppins;
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
`

