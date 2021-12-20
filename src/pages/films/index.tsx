import * as S from './style';
import API from '../../service/API';
import { useState,useEffect } from 'react';
import AllFilms from '../../components/films/allfilms';
import Loading from '../../components/loading';
import film from '../../types/film/filmtype';

const Films = ()=>{

    const [films,setFilms] = useState<film[]>([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        getFilms();
    },[])

    const getFilms = async()=>{
        let json = await API.films();
        setFilms(json.results);
        console.log(json.results);
        setLoading(false);
    }
    
    return(
        <>
           {loading? <Loading/> : films.map((item,index)=>(
               <AllFilms id = {index} key = {index} title={item.title} crawl={item.opening_crawl}/>
            ))}
        </>
    )
}
export default Films;