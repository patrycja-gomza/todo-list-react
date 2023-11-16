import { useSelector, useDispatch } from "react-redux";
import { TasksList, ListItem, ListContent, ToggleDoneButton, RemoveButton } from "./styled";
import { selectTasksState, toggleTaskDone, removeTask } from "../../tasksSlice";

const List = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
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
                        {task.content}
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