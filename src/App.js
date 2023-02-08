import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "zadanie 1", done: false },
  { id: 2, content: "zadanie 2", done: true },
];

const hideDoneTask = false;

function App() {
  return (
    <Container>
      <Header title="To-do-list" />
      <Section
        title="Add new task"
        body={<Form />}
      />
      <Section
        title="To-do-list"
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTask={hideDoneTask} />}
        body={<Tasks tasks={tasks} hideDoneTask={hideDoneTask} />}
      />
    </Container>
  );
}

export default App;