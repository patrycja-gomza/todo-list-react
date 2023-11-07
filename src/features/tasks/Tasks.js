import Form from "./Form/index.js";
import List from "./List/index.js";
import Buttons from "./Buttons/index.js";
import Section from "../../common/Section/index.js";
import Header from "../../common/Header/index.js";
import { StyledContainer } from "../../common/styled.js";
import { useTasks } from "../../useTasks.js";

function Tasks() {
  const { hideDone, toggleHideDone, tasks, removeTask, toggleTaskDone, setAllDone, addNewTask } = useTasks();

  return (
    <StyledContainer>

      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
        body={
          <List
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
      />

    </StyledContainer>
  );
};

export default Tasks;
