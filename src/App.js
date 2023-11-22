import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage/";
import AuthorPage from "./features/author/AuthorPage";
import { StyledNavLink, StyledNavList } from "./styled";
import { toAuthor, toTask, toTasks } from "./routes";

export default () => (
    <HashRouter>
        <nav>
            <StyledNavList>
                <li>
                    <StyledNavLink to={toTasks()}>Zadania</StyledNavLink>
                </li>
                <li>
                    <StyledNavLink to={toAuthor()}>O autorze</StyledNavLink>
                </li>
            </StyledNavList>
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
                <Route path="/">
                    <Redirect to={toTasks()} />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);

