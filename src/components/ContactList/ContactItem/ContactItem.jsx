// import { nanoid } from 'nanoid';

import PropTypes from 'prop-types';

import css from './ContactItem.module.css';

const ContactItem = ({ name, number, id, deliter }) => {
  return (
    <li className={css.listContItem}>
      {name}: {number}
      <button
        className={css.listContDell}
        //   обов язково колбек для спрацювання по кліку
        onClick={() => {
          deliter(id);
        }}
      >
        <span className={css.listContDellX}>Х</span>
      </button>
    </li>
  );
};
// проптайпи
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deliter: PropTypes.func.isRequired,
  id: PropTypes.string.isRequired,
};

export default ContactItem;
