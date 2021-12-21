import styled from 'styled-components';

export const LoadingContainer = styled.div`
    text-align:center;
    background-color: rgba(0, 0, 0, 0.493);
    padding:250px;
    color:white;
    height:800px;
    overflow-y:hidden;

    @media(max-width:600px){
        padding:50px;

        h1{
            margin:280px 0px;
        }
    }
`;
export const LoadingText = styled.h1`

`;

