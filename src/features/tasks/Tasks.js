import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Main } from "../../common/Main/styled";

function Tasks() {
  return (
    <Main>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        extraHeaderContent={<Buttons />}
        body={<TaskList />}
      />
    </Main>
  );
}

export default Tasks;
