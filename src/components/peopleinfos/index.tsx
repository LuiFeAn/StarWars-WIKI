import * as S from './style';
import people from '../../types/film/peopletype'
import film from '../../types/film/filmtype';
import API from '../../service/API';
import {useState,useEffect} from 'react'
import {useParams} from 'react-router-dom';

type Props = {
    data:people,
}

const PeopleInfos = (props:Props)=>{

    const params = useParams();

    const [planet,setPlanet] = useState({name:""});

    useEffect(()=>{
        if(params.id){
            getHomeWorld(params.id);
        }
    },[])

    const getHomeWorld = async(id:string)=>{
        let json = await API.planets(id);
        setPlanet(json);

    }

    return(
        <S.PeopleContainer>
            <div className='name-and-gender' color="black">
                Nome:
                <S.PeopleName>
                    {props.data.name}
                </S.PeopleName>
                <S.PeopleGender>
                    {props.data.gender}
                </S.PeopleGender>
            </div>
            <div className='eye-color'>
                 <S.PeopleEyeColorText>Cor dos olhos:</S.PeopleEyeColorText>
                 <S.PeopleEyeColor color={props.data.eye_color}/>
            </div>
            <S.PeopleBrith>
                Data de nascimento: {props.data.birth_year}
            </S.PeopleBrith>
            <S.PeoplePlanet>
                Planeta: {planet.name}
            </S.PeoplePlanet>
        </S.PeopleContainer>
    )
}
export default PeopleInfos;