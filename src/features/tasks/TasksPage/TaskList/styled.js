import { Link } from "react-router-dom/cjs/react-router-dom.min";
import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: 0 -10px;
    }
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.color.alto};
    padding: 10px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        padding: 10px 0;
        grid-gap: 5px;
    }

    ${({ $hidden }) => $hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ $done }) => $done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    width: 30px;
    height: 30px;
    color: ${({ theme }) => theme.color.white};
    cursor: pointer;

    ${({ $toggleDone }) => $toggleDone && css`
        background: ${({ theme }) => theme.color.green};
        transition: background 0.5s;

        &:hover {
            filter: brightness(120%);
        }

        &:active {
            filter: brightness(140%);
        }
    `}

    ${({ $remove }) => $remove && css`
        background: ${({ theme }) => theme.color.red};
        transition: background 0.5s;

        &:hover {
            filter: brightness(90%);
        }

        &:active {
            filter: brightness(80%);
        }
    `}
`;


export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${({theme}) => theme.color.teal};
`;