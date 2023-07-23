// import { nanoid } from 'nanoid';
import css from './ContactList.module.css';

const ContactList = ({contacts, deliter}) => {
  // console.log(contacts,"contacts")
  return (
    <ul className={css.listCont}>
      {contacts.map(({ id, name, number }) => (
        <li className={css.listContItem} key={id}>
          {name}: {number} 
          <button className={css.listContDell}
        //   обов язково колбек для спрацювання по кліку
          onClick={() =>  {deliter(id)}}
          > 
          <span className={css.listContDellX}>Х</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
