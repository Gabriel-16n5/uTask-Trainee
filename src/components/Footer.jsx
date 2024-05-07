import styled from "styled-components"

export default function FooterBar() {
    return (
        <Footer>
            <p>© Processo de Trainee <a href="https://unect.com.br/" target="_blank">Unect Jr.</a> </p>
            <p>Feito com <span class="material-icons">favorite</span> por <a href="https://github.com/Gabriel-16n5" target="_blank">Gabriel Granjeia</a></p>
        </Footer>
    )
}

const Footer = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color:#114FA7;
    width: 100%;
    height: 52px;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 1000;
    p{
        display: flex;
        font-family: Poppins;
        font-size: 20px;
        text-align: left;
        color: #FFFFFF;
        span{
            margin-left: 5px;
            margin-right: 5px;
            color: #FFAFAF;
        }
        a{
            color: inherit;
            text-decoration: underline;
            font-weight: 700;
            margin-left: 5px;
        }
    }
`