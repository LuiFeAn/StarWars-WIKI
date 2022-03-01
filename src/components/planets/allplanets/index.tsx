import * as S from './style';
import {useNavigate} from 'react-router-dom'

type Props = {
    name?:string,
    id:number,
}

const AllPlanets = ({name,id}:Props)=>{

    const nav = useNavigate();

    const handleClick = ()=>{
        nav(`/planets/${id+1}`)
    }

    return(
        <S.PlanetsContainer onClick={handleClick}>
            <S.PlanetsName>
                {id+1} . {name}
            </S.PlanetsName>
        </S.PlanetsContainer>
    )
}
export default AllPlanets;