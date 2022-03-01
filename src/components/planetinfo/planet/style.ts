import styled from 'styled-components';

export const  PlanetInfoContainer = styled.div`
    display:flex;
    flex-direction:column;
    color:white;
    font-size:20px;
    text-shadow: 1px 1px 2px black, 0 0 1em black, 0 0 0.2em black;
    align-items:center;
    text-align:center;

    #name-rot-orb{
        background-color:black;
        width:auto;
        display:flex;
        text-align:center;
        padding:20px;
    }
`;
export const PlanetName = styled.p`font-size:25px;text-align:center;`;
export const PlanetRotation = styled.p``;
export const PlanetOrbital = styled.p``;
export const PlanetDiameter = styled.p``;
export const PlanetClimate = styled.p``;
export const PlanetGravity = styled.p``;
export const PlanetTerrain = styled.p``;
export const PlanetSurface = styled.p``;
export const PlanetPopulation = styled.p``;
export const PlanetResidents = styled.p``;
export const PlanetFilms = styled.p``;