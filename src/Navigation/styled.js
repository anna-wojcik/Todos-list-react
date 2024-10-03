import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import styled from "styled-components";

export const StyledNavigation = styled.nav`
    position: absolute;
    top: 0;
    width: 100%;
    background: ${({ theme }) => theme.color.teal};
`;

export const List = styled.ul`
    height: 30px;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: center;
    gap: 40px;
    align-items: center;
`;

export const StyledNavLink = styled(NavLink)`
    color: ${({ theme }) => theme.color.white};
    text-decoration: none; 

    &.active {
        font-weight: bold;
    }
`;