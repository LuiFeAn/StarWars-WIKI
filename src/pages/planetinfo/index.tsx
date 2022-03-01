import * as S from './style';
import API from '../../service/API';
import {useState,useEffect} from 'react';
import Loading from '../../components/loading';
import planet from '../../types/film/planetype';
import { useParams } from 'react-router-dom';
import PlanetInfos from '../../components/planetinfo/planet';

const PlanetInfo = ()=>{
    const parms = useParams();
    
    const [planetInfo,setPlanetInfo] = useState<planet>({});

    useEffect(()=>{
        if(parms.id){
            getPlanetInfo(parms.id);
        }
    },[])

    const getPlanetInfo = async(id:string)=>{
        let json = await API.planets(id);
        console.log(json)
        setPlanetInfo(json);
    }

    return(
        <>
            <PlanetInfos data = {planetInfo}/>
        </>
    )
}
export default PlanetInfo;