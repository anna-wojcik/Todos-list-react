import styled, { css } from "styled-components";

export const List = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;

    @media(max-width: 767px) {
        margin: 0 -10px;
    }
`;

export const Item = styled.li`
    display: grid;
    grid-template-columns: auto 1fr auto;
    grid-gap: 10px;
    align-items: center;
    border-bottom: 1px solid #ddd;
    padding: 10px;

    @media(max-width: 767px) {
        padding: 10px 0;
        grid-gap: 5px;
    }

    ${({ hidden }) => hidden && css`
        display: none;
    `}
`;

export const Content = styled.span`
    ${({ done }) => done && css`
        text-decoration: line-through;
    `}
`;

export const Button = styled.button`
    border: none;
    width: 30px;
    height: 30px;
    color: white;
    cursor: pointer;

    ${({ toggleDone }) => toggleDone && css`
        background: green;
        transition: background 0.5s;

        &:hover {
            background: hsl(120, 100%, 30%);
        }

        &:active {
            background: hsl(120, 100%, 35%);
        }
    `}

    ${({ remove }) => remove && css`
        background: red;
        transition: background 0.5s;

        &:hover {
            background: hsl(0, 100%, 58%);
        }

        &:active {
            background: hsl(0, 100%, 65%);
        }
    `}
`;
