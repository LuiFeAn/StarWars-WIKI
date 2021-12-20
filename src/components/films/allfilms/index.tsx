import * as S from './style';
import {useNavigate} from 'react-router-dom'

type Props = {
    title:string,
    crawl:string,
    id:number,
}

const AllFilms = ({title,crawl,id}:Props)=>{

    const nav = useNavigate();

    const handleClick = ()=>{
        nav(`/films/:${id+1}`);
    }

    return(
        <S.FilmContainer>
            <S.FilmTitle onClick={handleClick}>
                {title}
            </S.FilmTitle>
            <S.FilmCrawl>
                {crawl.toUpperCase()}
            </S.FilmCrawl>
        </S.FilmContainer>
    )
}
export default AllFilms;