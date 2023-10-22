import { TasksList, ListItem, ListContent, ListButton } from "./styled";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <TasksList>
        {tasks.map(task => (
            <ListItem
                key={task.id}
                hidden={task.done && hideDone}
            >
                <ListButton
                    $toggleDone
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </ListButton>

                <ListContent>
                    {task.content}
                </ListContent>

                <ListButton
                    $remove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </ListButton>
            </ListItem>
        ))}
    </TasksList>
);

export default List;