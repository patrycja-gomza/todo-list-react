import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import { StyledContainer } from "./styled";
import { useTasks } from "./useTasks.js";

function App() {
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

export default App;
