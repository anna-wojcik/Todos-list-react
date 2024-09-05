import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
    padding: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
        padding: 0 20px 20px;
    }
`;

export const Button = styled.button`
    background: none;
    border: none;
    color: teal;
    transition: background 0.5s, 0.5s;
    cursor: pointer;

    &:hover {
        color: hsl(180, 100%, 35%);
    }

    &:disabled {
        color: #ccc;
        cursor: not-allowed;
    }
`;

