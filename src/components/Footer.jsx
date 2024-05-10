import styled from "styled-components"

export default function FooterBar(props) {
    const { darkMode } = props;
    return (
        <Footer darkMode={darkMode}>
            <p>© Processo de Trainee <a href="https://unect.com.br/" target="_blank">Unect Jr.</a> </p>
            <p>Feito com <span className="material-icons">favorite</span> por <a href="https://github.com/Gabriel-16n5" target="_blank">Gabriel Granjeia</a></p>
        </Footer>
    )
}

const Footer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    min-height: 50px;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background-color: ${(props) => (props.darkMode ? "#111111" : "#114FA7")};

    @media screen and (max-width: 480px) {
        justify-content: center;
        align-items: start;
        flex-direction:column;
}
    p{
        display: flex;
        font-family: Poppins;
        font-size: 20px;
        text-align: left;
        color: #FFFFFF;
        @media screen and (max-width: 480px) {
            font-size: 14px;
            margin-left:10px;
            margin-top:5px;
}
        span{
            margin-left: 5px;
            margin-right: 5px;
            color: #FFAFAF;
        }
        a{
            color: inherit;
            text-decoration: none;
            font-weight: 700;
            margin-left: 5px;
        }
    }
`