import * as S from './style';
import planet from '../../../types/film/planetype'

type Props = {
    data:planet,
}

const PlanetInfos = (props:Props)=>{
    return(
        <S.PlanetInfoContainer>
            <div id='name-rot-orb'>
                Nome:
                <S.PlanetName>
                    {props.data.name}
                </S.PlanetName>
                Rotação:
                <S.PlanetRotation>
                    {props.data.rotation_period}º
                </S.PlanetRotation>
                Órbita:
                <S.PlanetOrbital>
                    {props.data.orbital_period}º
                </S.PlanetOrbital>
            </div>
            <S.PlanetPopulation>
                População: {props.data.population}
            </S.PlanetPopulation>
            <S.PlanetGravity>
                Gravidade: {props.data.gravity}
            </S.PlanetGravity>
            <hr/>
            <strong>Terreno:</strong>
            <S.PlanetTerrain>
                 {props.data.terrain?.toUpperCase()}
            </S.PlanetTerrain>
        </S.PlanetInfoContainer>
    )
}
export default PlanetInfos