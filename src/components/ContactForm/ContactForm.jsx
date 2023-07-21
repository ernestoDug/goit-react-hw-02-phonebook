// import { nanoid } from 'nanoid'



import  css from './ContactForm.module.css'


const ContactForm = () => 
{
    return (
    <form  className={css.formsWr }>
    {/* onSubmit={this.handleSubmit} */}
    <label className={css.label}>
      Ім'я
      <input 
       className={css.input}
    // const { login } = this.state;

        type="text"
        placeholder="Введіть ім'я"
        // value={login}
        // onChange={this.handleChange}
      />
    </label>

    <button className={css.buttons} type="submit">Додати контакт </button>
    {/* {login} */}
  </form>)
  }


export default ContactForm