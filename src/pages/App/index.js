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

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header />
        <Form setTask={setTask} />
        <List task={tasks} />
      </Container>
    </ThemeProvider>
  );
}

export default App;
