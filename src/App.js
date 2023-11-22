import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage/";
import AuthorPage from "./features/author/AuthorPage";
import { toAuthor, toTask, toTasks } from "./routes";
import Navigation from "./Navigation";

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
            <Route path="/">
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);

