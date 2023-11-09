import { useSelector } from "react-redux";
import { TasksList, ListItem, ListContent, ToggleDoneButton, RemoveButton } from "./styled";
import { selectTasks } from "../tasksSlice";

const List = ({ removeTask, toggleTaskDone }) => {
    const { tasks, hideDone } = useSelector(selectTasks);

    return (
        <TasksList>
            {tasks.map(task => (
                <ListItem
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <ToggleDoneButton
                        onClick={() => toggleTaskDone(task.id)}
                    >
                        {task.done ? "✔" : ""}
                    </ToggleDoneButton>

                    <ListContent $done={task.done}>
                        {task.content}
                    </ListContent>

                    <RemoveButton
                        onClick={() => removeTask(task.id)}
                    >
                        🗑
                    </RemoveButton>
                </ListItem>
            ))}
        </TasksList>
    );
};

export default List;