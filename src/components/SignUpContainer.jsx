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
                <RegisterContent>
                    <SubTitle>Crie uma conta</SubTitle>
                    <form onSubmit={submitRegister}>
                    <div>
                            <p>Nome do usuário</p>
                            <RegisterInput
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
                            <RegisterInput
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
                            <RegisterInput
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
                            <RegisterInput
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
            <VerticalSeparator/>
            <ImgRegister src={ImagemRegister} alt="imagem de login" />
        </PageContainer>
    )
}

const PasswordField = styled.div`
    display:flex;
    flex-direction: column;
    position: relative;
`

const RegisterInput = styled.input`
    width: 30rem;
    height: 3rem;
    border-radius: 8px;
    border: 1px solid #002D6C;
    padding-right: 30px;
    box-sizing: border-box;
    background: #EEF5FF;
    font-size:18px;
    padding-left: 10px;
    margin-bottom: 20px;
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
    margin-bottom: 50px;
    width: 170px;
    height: 1px;
    background-color: #3B5F91;
    margin-left: auto;
    margin-right: auto;
`;

const VerticalSeparator = styled.div`
    width: 4px;
    height: 60rem;
    background-color: #9CC7FBB2;
    margin-left: 5rem;
    margin-right: 5rem;
`;

const RegisterButton = styled.button`
    margin-top:25px;
    width: 30rem;
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
`

const RegisterContent = styled.section`
    display: flex;
    flex-direction: column;
    p{
        font-family: Poppins;
        font-size: 20px;
        font-weight: 400;
        line-height: 24px;
        text-align: left;
        margin-bottom:5px;
    }
`

const RegisterContainer = styled.div`
    height: 40rem;
    width: 40rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const ImgRegister = styled.img`
    width: 55rem;
    height: auto;
`

const PageContainer = styled.div`
    display: flex;
    justify-content:center;
    align-items: center;
    width: auto;
    height: auto;
`

const Title = styled.h1`
    color: #226ED8;
    font-family: Poppins, sans-serif;
    font-size: 62px;
    font-weight: 700;
    line-height: 63px;
    text-align: center;
    margin-bottom: 1rem;
`

const SubTitle = styled.h2`
    font-family: Poppins;
    font-size: 22px;
    font-weight: 600;
    line-height: 30px;
    text-align: left;
    color: #00122A;
    margin-bottom: 15px;
`

const PasswordMismatchMessage = styled.h3`
    color: #820000;
    font-family: Poppins;
    font-size: 10px;
    font-weight: 400;
    line-height: 15px;
    text-align: left;
`

