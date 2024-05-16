import {Footer} from "../style/FooterCss";

export default function FooterBar(props) {
    const { darkMode } = props;
    return (
        <Footer darkMode={darkMode}>
            <p>© Processo de Trainee <a href="https://unect.com.br/" target="_blank">Unect Jr.</a> </p>
            <p>Feito com <span className="material-icons">favorite</span> por <a href="https://github.com/Gabriel-16n5" target="_blank">Gabriel Granjeia</a></p>
        </Footer>
    )
}