import styled from "styled-components";

export const StyledForm = styled.form`
    display: grid;
    grid-template-columns: 1fr auto;
    grid-gap: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
    }
`;

export const Input = styled.input`
    padding: 10px;
    border: 1px solid ${({ theme }) => theme.color.alto};
`;

export const Button = styled.button`
    padding: 10px;
    border: none;
    background: ${({ theme }) => theme.color.teal};
    color: ${({ theme }) => theme.color.white};
    transition-property: background, transform;
    transition-duration: 0.5s, 0.5s;
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
        transform: scale(1.1);
    }

    &:active {
        filter: brightness(140%);
        border: 1px solid ${({ theme }) => theme.color.black};
    }
`;