import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import convertToSeconds from '../../../common/utils/convertToSeconds';
import { formatTime } from '../../../common/utils/formatTime';
import { Button } from '../../Button';
import { Actions, Card } from './styles';

export default function Task({ title, time, id }) {
  const [remainingTime, setRemainingTime] = useState(convertToSeconds(time));
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setRemainingTime((prevTime) => {
          if (prevTime > 0) {
            return prevTime - 1;
          }
          clearInterval(intervalId);
          setIsRunning(false);
          return 0;
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [isRunning]);

  const handleClickButton = () => {
    setIsRunning((prevIsRunning) => !prevIsRunning);
  };

  const resetTimer = () => {
    setRemainingTime(convertToSeconds(time));
    setIsRunning(false);
  };

  return (
    <Card id={id}>
      <div className="info">
        <div className="contact-name">
          <strong>{title}</strong>
          <small>{formatTime(remainingTime)}</small>
        </div>
      </div>
      <Actions>
        <Button onClick={handleClickButton}>{isRunning ? 'Parar' : 'Começar'}</Button>
        <Button className="reset" onClick={resetTimer}>Reiniciar</Button>
      </Actions>
    </Card>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  id: PropTypes.string,
};

Task.defaultProps = {
  id: 'default-id',
};
