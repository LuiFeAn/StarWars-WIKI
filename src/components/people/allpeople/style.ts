import styled from 'styled-components';

export const FilmContainer = styled.div`
    color:white;
    display:flex;
    flex-direction:column;
    align-items:center;
    text-align:center;
    font-weight:bold;
`;
export const FilmTitle = styled.h1`
    background-color: rgba(0, 0, 0, 0.493);
    padding:15px;
    border-radius:5px;
    cursor:pointer;
`;
export const FilmCrawl = styled.p`
    font-size:20px;
    inline-size:950px;
    background-color: rgba(0, 0, 0, 0.493);
    padding:15px;
    border-radius:5px;

    @media(max-width:600px){
        inline-size:auto;
    }
`;