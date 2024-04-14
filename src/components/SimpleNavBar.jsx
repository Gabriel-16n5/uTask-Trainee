import styled from "styled-components"

export default function SimpleNavBar() {
    return (
        <SimpleNav></SimpleNav>
    )
}

const SimpleNav = styled.div`
    background-color: #226ED8;
    width: 100%;
    height: 52px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
`
