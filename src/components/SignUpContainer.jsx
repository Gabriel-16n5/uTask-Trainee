import { HorizontalSeparator, Icon, ImgRegister, PageContainer, PasswordField, PasswordMismatchMessage, RegisterButton, RegisterContainer, RegisterContent, RegisterInput, SubTitle, Title, VerticalSeparator } from '../style/SignUpContainerCss'
import React, { useState } from "react"
import axios from 'axios';
import ImagemRegister from "../assets/Tasks complete.svg"
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"

export default function SignUpContainer() {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', confirmPassword: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [passwordsMatch, setPasswordsMatch] = useState(true);
    const navigate = useNavigate();
    const apiUrl = import.meta.env.VITE_APP_API_URL || 'http://localhost:5000';

    function registerValidation(e) {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "confirmPassword") {
            setPasswordsMatch(value === formData.password);
        }
    }

    async function submitRegister(e) {
        e.preventDefault();
        const { confirmPassword, ...formDataToSend } = formData;
        try {
            await axios.post(`${apiUrl}/signup`, formDataToSend);
            Swal.fire({
                title: "Conta criada com sucesso",
                text: "Um instante, iremos te redirecionar ao login !",
                icon: "success",
                showConfirmButton: false,
                timer: 2500,
            });
            navigate("/");
        } catch (error) {
            console.error('Erro ao enviar dados do formulário:', error.mess);
        }
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
                                type="name"
                                name="name"
                                onChange={registerValidation}
                                value={formData.name}
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
            <ImgRegister><img src={ImagemRegister} alt="imagem de login"/></ImgRegister>
        </PageContainer>
    )
}
