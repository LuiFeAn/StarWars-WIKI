import * as S from './style';
import API from '../../service/API';
import { useEffect,useState } from 'react';
import AllPlanets from '../../components/planets/allplanets';
import planet from '../../types/film/planetype';
import Loading from '../../components/loading';

const Planets = ()=>{

    const [planets,setPlanets] = useState<planet[]>([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getPlanets();
    },[])

    const getPlanets = async()=>{
        let json = await API.planets();
        setPlanets(json.results);
        setLoading(false);
    }

    return(
        <>
            {!!loading?<Loading/> : planets.map((element,index)=>(
                <AllPlanets id = {index} key={index} name={element.name}/>
            ))}
        </>
    )
}
export default Planets;