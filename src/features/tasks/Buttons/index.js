import { useSelector, useDispatch } from "react-redux";
import { ButtonsContainer, Button } from "./styled";
import { selectTasksState, toggleHideDone, setAllDone, selectAreAllTasksDone } from "../tasksSlice";

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
        </ButtonsContainer >
    );
}

export default Buttons;