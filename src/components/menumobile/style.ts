import styled from 'styled-components';

export const MenuBar = styled.div`
    display:flex;
    flex-direction:column;
    position:relative;
    align-items:flex-start;
    transition:1s;
    left:0px;
    gap:5px;
    background-color:white;
    padding:10px;
    border-radius:10px;

    @media(min-width:600px){
        display:none;
    }
`;
export const MenuIcon = styled.div`
    background-color:black;
    width:30px;
    transition:1s;
    height:10px;
`;

export const MenuOption = styled.aside`
    color:white;
    display:flex;
    flex-direction:column;
    gap:5px;
    transition:1s;

    ul{
        display:flex;
        flex-direction:column;
        text-decoration:none;
        border-radius:5px;
        gap: 30px;
        transition:1s;
        padding:20px;
    }
    li{
        list-style:none;
        transition:1s;
    }
    a{
        transition:1s;
        color:white;
        text-decoration: none;
        font-size:20px;
        font-weight:bold;
        transition:1s;
        font-weight:bold;
        margin:0 30px;

        &:hover{
            color:rgba(0, 0, 0, 0.452);
        }
    }
`;
export const MenuText = styled.p`

`;