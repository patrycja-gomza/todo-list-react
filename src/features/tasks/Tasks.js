import { useSelector } from "react-redux";
import Form from "./Form/index.js";
import List from "./List/index.js";
import Buttons from "./Buttons/index.js";
import Section from "../../common/Section/index.js";
import Header from "../../common/Header/index.js";
import { StyledContainer } from "../../common/styled.js";
import { useTasks } from "../../useTasks.js";
import { selectTasks } from "./tasksSlice.js";

function Tasks() {
  const {
    setAllDone,
  } = useTasks();

  const { tasks } = useSelector(selectTasks);

  return (
    <StyledContainer>

      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            setAllDone={setAllDone}
          />
        }
        body={<List />}
      />

    </StyledContainer>
  );
};

export default Tasks;
