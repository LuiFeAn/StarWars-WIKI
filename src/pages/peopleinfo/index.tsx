import * as S from './style';
import API from '../../service/API';
import {useState,useEffect} from 'react';
import people from '../../types/film/peopletype';
import Loading from '../../components/loading';
import { useParams } from 'react-router-dom';
import PeopleInfos from '../../components/peopleinfos';


const PeopleInfo = ()=>{

    const [people,setPeople] = useState<people>({});
    const [loading,setLoading] = useState(true);

    const params = useParams();

    useEffect(()=>{
        if(params.id){
            getPeople(params.id);
        }
    },[])

    const getPeople = async (id: string)=>{
        let json = await API.people(id);
        setPeople(json);
    }
    return(
        <>
            <PeopleInfos data = {people}/>
        </>
    )
}
export default PeopleInfo;