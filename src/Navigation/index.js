import { toTasks, toAuthor } from "../routes";
import { StyledNavigation, List, StyledNavLink } from "./styled";

const Navigation = () => (
    <StyledNavigation>
            <List>
                <li>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </li>
            </List>
        </StyledNavigation>
);

export default Navigation;