import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, Button } from "./styled";
import {
    selectTasksState,
    toggleHideDone,
    setAllDone,
    selectAreAllTasksDone,
    fetchExampleTasks
} from "../tasksSlice";

const Buttons = ({ isFormSection }) => {
    const { tasks, hideDone } = useSelector(selectTasksState);
    const areAllTasksDone = useSelector(selectAreAllTasksDone);
    const dispatch = useDispatch();

    return (
        <ButtonsContainer>
            {tasks.length > 0 && !isFormSection && (
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
            )}

            {isFormSection && (
                <Button
                    onClick={() => dispatch(fetchExampleTasks())}
                >
                    Pobierz przykładowe zadania
                </Button>
            )}
        </ButtonsContainer >
    );
}

export default Buttons;