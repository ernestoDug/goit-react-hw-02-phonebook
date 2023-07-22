// import { nanoid } from 'nanoid'



import  css from './ContactForm.module.css'


const ContactForm = ({names, changer, number}) => 
{
    return (
    <form  
    className={css.formsWr }>
    {/* onSubmit={this.handleSubmit} */}
    <label className={css.label}>
      Ім'я
      <input 
       className={css.input}
          onChange = { changer }
          names = { names }
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          type="text"
        placeholder="Введіть ім'я"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        name="name"
        required
      />
    </label>

    <label className={css.label}>
Номер телефону
      <input
           className={css.input}
  type="tel"
  placeholder="Введіть номер телефону"
  onChange = { changer }
          number = { number }
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
     
    </label>


       <button className={css.buttons} type="submit">Додати контакт </button>
    {/* {login} */}
  </form>)
  }


export default ContactForm