import { Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage/";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import { Navigation, List, StyledNavLink } from "./styled";

export default () => (
    <HashRouter>
        <Navigation>
            <List>
                <li>
                    <StyledNavLink to="/zadania">Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to="/autor">O autorze</StyledNavLink>
                </li>
            </List>
        </Navigation>

        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <AuthorPage />
            </Route>
            <Route path="/">
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
);