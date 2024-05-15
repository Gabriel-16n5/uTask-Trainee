import { CustomLink, HorizontalSeparator, Icon, ImgLogin, LoginButton, LoginContainer, LoginInput, PageContainer, PasswordField, RegisterLink, SingInContainer, Title, VerticalSeparator } from '../style/SignInContainerCss'
import React, { useState } from "react"
import axios from 'axios';
import ImagemLogin from "../assets/Task management.svg"
import { useNavigate } from 'react-router-dom'
import Swal from "sweetalert2";

export default function SignInContainer() {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    function loginValidation(e) {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    async function submitLogin(e) {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/signin', formData);
            if (response.status === 200) {
                localStorage.setItem('Authorization', response.data.token);
                navigate("/home");
            } else {
                Swal.fire({
                    title: "Erro ao fazer login",
                    text: "Por favor, verifique suas credenciais e tente novamente.",
                    icon: "error",
                    showConfirmButton: true,
                });
            }
        } catch (error) {
            console.error('Erro ao fazer login:', error);
            Swal.fire({
                title: "Erro ao fazer login",
                text: "Ocorreu um erro durante o login. Por favor, tente novamente mais tarde.",
                icon: "error",
                showConfirmButton: true,
            });
        }
    }
    

    function handleVisibilityToggle() {
        setShowPassword(!showPassword);
    }

    return (
        <PageContainer>
            <ImgLogin><img src={ImagemLogin} alt="imagem de login" /></ImgLogin>
            <VerticalSeparator />
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
