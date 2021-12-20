import * as S from './style';
import API from '../../service/API';
import {useState,useEffect} from 'react';
import people from '../../types/film/peopletype';
import AllPeople from '../../components/people/allpeople';
import Loading from '../../components/loading';
import { useParams } from 'react-router-dom';
const People = ()=>{

    const [people,setPeople] = useState<people[]>([]);
    const [onePeople,setOnePeople] = useState<people>();
    const [loading,setLoading] = useState(true);

    const params = useParams();

    useEffect(()=>{
        getPeoples();
        if(params.id){
            getPeople(params.id)
        }
    },[])

    const getPeoples = async ()=>{
        let json = await API.people();
        setPeople(json.results);
        console.log(json.results);
        setLoading(false);
    }

    const getPeople = async (id: string)=>{
        let json = await API.people(id);
        setOnePeople(json);
    }

    return(
        <>
        {loading? <Loading/> : people.map((item,index)=>(
            <AllPeople id = {index} key = {index} name = {item.name}/>
        ))}
        </>
    )
}
export default People;