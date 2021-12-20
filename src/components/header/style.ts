import styled from 'styled-components';

export const Header = styled.header`
    background-color: black;
    transition:1s;
    display:flex;
    flex-direction:column;
    background-color:rgba(0, 0, 0, 0.5);
    background-size:cover;
    align-items:center;
    color:white;
    border-radius: 2px solid black;

    justify-content:center;
    gap: 15px;

    ul{
        display:flex;
        text-decoration:none;
        border-radius:5px;
        gap: 30px;
    
        padding:20px;
    }
    li{
        list-style:none;
    }
    a{
        color:white;
        text-decoration: none;
        font-size:20px;
        font-weight:bold;
        transition:1s;
        font-weight:bold;

        &:hover{
            color:rgba(0, 0, 0, 0.452);
        }
    }
`;
