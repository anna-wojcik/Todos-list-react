import styled, { css } from "styled-components";

export const StyledSection = styled.section`
    background: ${({ theme }) => theme.color.white};
    margin: 10px 0;
`;

export const Div = styled.div`
    ${({ headerArea }) => headerArea && css`
        display: grid;
        grid-template-columns: 1fr auto auto;
        align-items: center;

        @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
            grid-template-columns: 1fr;
        }
    `}
    
    ${({ body }) => body && css`
        padding: 20px;
        border-top: 1px solid ${({ theme }) => theme.color.alto};
        word-break: break-word;
    `}
`;

export const Header2 = styled.h2`
    padding: 20px;
    margin: 0;
`;