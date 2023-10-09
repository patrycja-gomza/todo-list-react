import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "zrobić pranie", done: false },
  { id: 2, content: "wypić kawę", done: true },
];

const hideDone = false;

function App() {
  return (
    <Container>

      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
        body={<List tasks={tasks} hideDone={hideDone} />}
      />

    </Container>
  );
};

export default App;
