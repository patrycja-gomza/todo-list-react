import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { TasksList, ListItem, ListContent, ToggleDoneButton, RemoveButton } from "./styled";
import { selectTasksByQuery, selectTasksState, toggleTaskDone, removeTask } from "../../tasksSlice";

const List = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get("szukaj");

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectTasksState);
    const dispatch = useDispatch();

    return (
        <TasksList>
            {tasks.map(task => (
                <ListItem
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <ToggleDoneButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </ToggleDoneButton>

                    <ListContent $done={task.done}>
                        <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                    </ListContent>

                    <RemoveButton
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑
                    </RemoveButton>
                </ListItem>
            ))}
        </TasksList>
    );
};

export default List;