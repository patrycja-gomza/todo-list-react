import { TasksList, ListItem, ListContent, ToggleDoneButton, RemoveButton } from "./styled";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
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

export default List;