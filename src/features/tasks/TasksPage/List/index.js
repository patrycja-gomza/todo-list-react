import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { TasksList, ListItem, ListContent, ToggleDoneButton, RemoveButton, StyledLink } from "./styled";
import { selectTasksByQuery, selectTasksState, toggleTaskDone, removeTask } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";

const List = () => {
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const query = searchParams.get(searchQueryParamName);

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const { hideDone } = useSelector(selectTasksState);
    const dispatch = useDispatch();

    return (
        <TasksList>
            {tasks.map(task => (
                <ListItem
                    key={task.id}
                    $hidden={task.done && hideDone}
                >
                    <ToggleDoneButton
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </ToggleDoneButton>

                    <ListContent $done={task.done}>
                        <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
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