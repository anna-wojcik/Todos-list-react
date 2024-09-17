import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
    align-items: center;
    padding: 20px;

    @media(max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        grid-template-columns: 1fr;
        padding: 0 20px 20px;
    }
`;

export const Button = styled.button`
    background: none;
    border: none;
    color: ${({ theme }) => theme.color.teal};
    transition: background 0.5s, 0.5s;
    cursor: pointer;

    &:hover {
        filter: brightness(120%);
    }

    &:disabled {
        color: ${({ theme }) => theme.color.silver};
        cursor: not-allowed;
    }
`;

