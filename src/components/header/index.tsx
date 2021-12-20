import * as S from './style';
import { Link } from 'react-router-dom';

const Header = ()=>{
    return(
       <S.Header>
           <ul>
               <li><Link to={"/films/"}>Filmes</Link></li>
               <li><Link to={"/people/"}>Pessoas</Link></li>
               <li><Link to={"/planets/"}>Planetas</Link></li>
               <li><Link to={"/species/"}>Espécies</Link></li>
               <li><Link to={"/star-ships/"}>Naves</Link></li>
               <li><Link to={"/vehicles/"}>Veiculos</Link></li>
           </ul>
       </S.Header>
    )
}
export default Header;