import styled from 'styled-components';

export const PeopleContainer = styled.div`
    display:flex;
    color:white;
    flex-direction:column;
    align-items:center;
    font-weight:bold;
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
    text-align:center;
    justify-content:center;

    .name-and-gender{
        display:flex;
        padding:20px;
        background-color:black;
        border-radius:5px;
        text-algin:center;
        align-items:flex-start;
    }
    .eye-color{
        display:flex;
        flex-direction:column;
        align-items:center;
        padding:20px;
        gap:20px;
    }

    @media(max-width:600px){
        align-items:unset;
    }
`;
export const PeopleName = styled.h1`
    inline-size:250px;
`;
export const PeopleGender = styled.p`
    font-size:18px;
    margin-left:10px;
`;
export const PeopleFilms = styled.h1``;
export const PeopleEyeColorText = styled.p``;
export const PeopleEyeColor = styled.div<{color?:string}>`
    width:25px;
    height:25px;
    display:flex;
    border-radius:100%;
    border:1px solid black;
    background-color:${props=>props.color};
`;
export const PeopleBrith = styled.p`

`;
export const PeoplePlanet = styled.p``;