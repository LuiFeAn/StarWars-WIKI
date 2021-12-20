import * as S from './style';
import {useNavigate} from 'react-router-dom'

type Props = {
   name?:string,
   id:number,
}

const AllPeople = ({name,id}:Props)=>{

    const nav = useNavigate();

    const handleClick = ()=>{
        nav(`/people/${id+1}`);
    }

    return(
        <S.PeopçeContainer>
            <S.PeopleName onClick={handleClick}>
                {id+1} . {name}
            </S.PeopleName>
        </S.PeopçeContainer>
    )
}
export default AllPeople;