import * as S from './style';
import {useNavigate} from 'react-router-dom'

type Props = {
    name:string,
   id:number,
}

const AllPeople = ({name,id}:Props)=>{

    const nav = useNavigate();

    const handleClick = ()=>{
        nav(`/people/:${id+1}`);
    }

    return(
        <S.FilmContainer>
            <S.FilmTitle onClick={handleClick}>
                {name}
            </S.FilmTitle>
        </S.FilmContainer>
    )
}
export default AllPeople;