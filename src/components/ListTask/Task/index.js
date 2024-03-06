import PropTypes from 'prop-types';
import { Button } from '../../Button';
import { Actions, Card } from './styles';

export default function Task({ title, time }) {
  return (
    <Card>
      <div className="info">
        <div className="contact-name">
          <strong>{title}</strong>
          <small>{time}</small>
        </div>
      </div>
      <Actions>
        <Button>Começar</Button>
        <Button className="stop">Parar</Button>
        <Button className="reset">Reiniciar</Button>
      </Actions>
    </Card>
  );
}

Task.propTypes = {
  title: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
};
