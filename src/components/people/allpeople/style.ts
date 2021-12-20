import styled from 'styled-components';

export const PeopçeContainer = styled.div`
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    font-weight:bold;
`;
export const PeopleName = styled.h1`
    background-color: rgba(0, 0, 0, 0.493);
    width:500px;
    padding:15px;
    border-radius:5px;
    cursor:pointer;
    @media(max-width:600px){
        inline-size:350px;
        font-size:30px;
    }
`;