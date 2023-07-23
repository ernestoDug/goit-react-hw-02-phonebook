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

export default ContactItem;
