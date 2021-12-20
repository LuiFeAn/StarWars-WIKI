import * as S from './style';
import API from '../../service/API';
import {useState,useEffect} from 'react';
import people from '../../types/film/peopletype';
import AllPeople from '../../components/people/allpeople';
import Loading from '../../components/loading';
const People = ()=>{

    const [people,setPeople] = useState<people[]>([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getPeoples();
    },[])

    const getPeoples = async ()=>{
        let json = await API.people();
        setPeople(json.results);
        console.log(json.results);
        setLoading(false);
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