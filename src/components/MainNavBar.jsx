import logoBranco from '../assets/LogoBranca.png';
import logoBlue from '../assets/LogoAzul.png';
import Switch from 'react-switch';
import { useState } from 'react';
import {
  Button,
  ButtonContainer,
  MainNav,
  Title,
} from '../style/MainNavBarCss';

export default function MainNavBar(props) {
  const { setDarkMode } = props;
  const [darkModeVerify, setDarkModeVerify] = useState(false);

  const switchHandlerDarkMode = (checked) => {
    setDarkModeVerify(checked);
    setDarkMode(checked);
    if (darkModeVerify === false) setDarkMode(true);
    if (darkModeVerify === true) setDarkMode(false);
  };

  return (
    <MainNav darkModeVerify={darkModeVerify}>
      {darkModeVerify ? (
        <img src={logoBlue} alt="icon"></img>
      ) : (
        <img src={logoBranco} alt="icon"></img>
      )}
      <Title darkModeVerify={darkModeVerify}>uTask 3.0</Title>
      <ButtonContainer>
        <Button>
          <Switch
            checked={darkModeVerify}
            onChange={switchHandlerDarkMode}
            offColor="#FFC93F"
            onColor="#222222"
          />
        </Button>
      </ButtonContainer>
    </MainNav>
  );
}
