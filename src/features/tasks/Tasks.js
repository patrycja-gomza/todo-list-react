import Form from "./Form/index.js";
import List from "./List/index.js";
import Buttons from "./Buttons/index.js";
import Section from "../../common/Section/index.js";
import Header from "../../common/Header/index.js";
import { StyledContainer } from "../../common/styled.js";

function Tasks() {
  return (
    <StyledContainer>

      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        extraHeaderContent={<Buttons isFormSection />}
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<List />}
      />

    </StyledContainer>
  );
};

export default Tasks;
