import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, Button } from "./styled";
import {
    selectTasksState,
    toggleHideDone,
    setAllDone,
    selectAreAllTasksDone,
    fetchExampleTasks
} from "../tasksSlice";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const areAllTasksDone = useSelector(selectAreAllTasksDone);
    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
            {tasks.length > 0 && (
                <>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={areAllTasksDone}
                    >
                        Ukończ wszystkie
                    </Button>

                    <Button
                        onClick={() => dispatch(toggleHideDone())}
                    >
                        {hideDone ? "Pokaż" : "Ukryj"} ukończone
                    </Button>
                </>
            )
            }
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                Pobierz przykładowe zadania
            </Button>
        </ButtonsContainer >
    );
}

export default Buttons;