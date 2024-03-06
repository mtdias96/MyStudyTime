import { ThemeProvider } from 'styled-components';

import { useState } from 'react';
import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';

import Form from '../../components/Form';
import Header from '../../components/Header';
import List from '../../components/ListTask';
import { Container } from './styles';

function App() {
  const [tasks, setTask] = useState([]);
  const [selected, setSelected] = useState();

  console.log(tasks);
  function selectTask(taskSelect) {
    console.log(taskSelect);
    setSelected(taskSelect);
    setTask((prevState) => prevState.map((task) => ({
      ...task,
      selected: task.id === selectTask.id,
    })));
  }
  console.log(selected);
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Form setTask={setTask} />
        <List task={tasks} selectTask={() => selectTask} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
