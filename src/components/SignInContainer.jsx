import {CustomLink, HorizontalSeparator, Icon, ImgLogin, LoginButton, LoginContainer, LoginInput, PageContainer, PasswordField, RegisterLink, SingInContainer, Title, VerticalSeparator} from '../style/SignInContainerCss'
import React, { useState } from "react"
import ImagemLogin from "../assets/Task management.svg"
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