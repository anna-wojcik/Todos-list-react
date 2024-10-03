import styled from "styled-components";

export const StyledButton = styled.button`
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
        filter: none;
    }
`;