import * as S from './style';

const Welcome = ()=>{
    return(
       <S.WelcomeContainer>
           <S.WelcomeText>
               Olá, seja bem-vindo ao StarWiki
           </S.WelcomeText>
           <img src="https://media2.giphy.com/media/128cFIx0vlouKQ/giphy.gif?cid=6c09b952qyd3sjmtl0wfnnepxu49ppdu8pdcqoa5679m12dx&rid=giphy.gif&ct=s"/>
       </S.WelcomeContainer>
    )
}
export default Welcome;