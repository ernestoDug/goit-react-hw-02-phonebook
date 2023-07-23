// import { nanoid } from 'nanoid';
import css  from "./ContactList.module.css";

const ContactList = ({contacts}) =>
{
    console.log(contacts,"1111111111111111111111")
    return (
        <ul className={css.listCont}>
            

               {contacts.map(({ id, name, number }) => (
                    <li className={css.listContItem}
                    key={id}>
                        {name}: {number}
          </li>        
         ))}
        </ul>
     );
               };


export default ContactList