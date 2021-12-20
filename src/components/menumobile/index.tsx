import * as S from './style';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const MenuMobile = ()=>{

    const [click,setClick] = useState(false);

    const handleClick = ()=>{
        !click? setClick(true) : setClick(false);
    }
    const handleClickOp = ()=>{
        setClick(false);
    }
    return(
        <>
        <S.MenuBar onClick={handleClick}>
            <S.MenuIcon/>
            <S.MenuIcon/>
            <S.MenuIcon/>
        </S.MenuBar>
        {click? <S.MenuOption>
            <ul>
               <li><Link onClick={handleClickOp} to={"/films/"}>Filmes</Link></li>
               <li><Link onClick={handleClickOp} to={"/people/"}>Pessoas</Link></li>
               <li><Link onClick={handleClickOp} to={"/planets/"}>Planetas</Link></li>
               <li><Link onClick={handleClickOp} to={"/species/"}>Espécies</Link></li>
               <li><Link onClick={handleClickOp} to={"/star-ships/"}>Naves</Link></li>
               <li><Link onClick={handleClickOp} to={"/vehicles/"}>Veiculos</Link></li>
           </ul>
        </S.MenuOption> : null}
        </>
    )
}
export default MenuMobile;