import PropTypes from 'prop-types';

import { useState } from 'react';
import { Button } from '../Button';
import Input from '../Input';

import { FormContainer, InputContainer } from './styles';

export default function Form({ setTask }) {
  const [title, setTitle] = useState('');
  const [time, setTime] = useState('');

  const handleStudyChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTimeChange = (event) => {
    let valor = event.target.value.replace(/\D/g, '').substring(0, 6);
    if (valor.length > 2) {
      valor = `${valor.substring(0, 2)}:${valor.substring(2)}`;
    }
    if (valor.length > 5) {
      valor = `${valor.substring(0, 5)}:${valor.substring(5)}`;
    }
    setTime(valor);
  };

  const addTasks = (event) => {
    event.preventDefault();
    setTask((prevState) => [...prevState, { title, time }]);
  };

  return (
    <FormContainer onSubmit={addTasks}>
      <InputContainer>
        <Input
          id="task"
          placeholder="Digite sua tarefa"
          value={title}
          onChange={handleStudyChange}
        />
      </InputContainer>
      <InputContainer>
        <Input
          id="time"
          type="text"
          placeholder="00:00:00"
          value={time}
          onChange={handleTimeChange}
        />
      </InputContainer>
      <Button>
        Adicionar tarefa
      </Button>
    </FormContainer>
  );
}

Form.propTypes = {
  setTask: PropTypes.func.isRequired,
};
