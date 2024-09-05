import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    background: white;
    margin: 10px 0;
`;

export const Div = styled.div`
    ${({ headerArea }) => headerArea && css`
        display: grid;
        grid-template-columns: 1fr auto auto;
        align-items: center;

        @media(max-width: 767px) {
            grid-template-columns: 1fr;
        }
    `}
    
    ${({body}) => body && css`
        padding: 20px;
        border-top: 1px solid #ddd;
        word-break: break-word;
    `}
`;

export const Header2 = styled.h2`
    padding: 20px;
    margin: 0;
`;