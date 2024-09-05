import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: 767px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid #ddd;
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    background: teal;
    color: white;
    transition-property: background, transform;
    transition-duration: 0.5s, 0.5s;
    cursor: pointer;

    &:hover {
        background: hsl(180, 100%, 30%);
        transform: scale(1.1);
    }

    &:active {
        background: hsl(180, 100%, 35%);
        border: 1px solid black;
    }
`;