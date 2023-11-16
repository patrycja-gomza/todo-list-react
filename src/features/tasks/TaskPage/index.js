import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import { StyledContainer } from "../../../common/styled";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { getTaskById } from "../tasksSlice";

function TaskPage() {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <StyledContainer>
            <Header title="Szczegóły zadania" />
            <Section
                title={task ? task.content : "Nie znaleziono zadania 😢"}
                body={
                    <><strong>Ukończono:</strong> {task && task.done ? "Tak" : "Nie"}</>
                }
            />
        </StyledContainer>
    );
};

export default TaskPage;