import { Switch, Route, HashRouter, Redirect } from "react-router-dom/cjs/react-router-dom.min";
import TasksPage from "./features/tasks/TasksPage/";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import Navigation from "./Navigation";
import { toTasks, toAuthor, toTask } from "./routes";

export default () => (
    <HashRouter>
        <Navigation />

        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);