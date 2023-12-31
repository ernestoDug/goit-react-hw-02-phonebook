// import { nanoid } from 'nanoid'
import PropTypes from 'prop-types';

import { Component } from 'react';

import css from './ContactForm.module.css';

const INITIAL_STATE = {
  name: '',
  number: '',
};

// форма
export class ContactForm extends Component {
  state = { ...INITIAL_STATE };
  //  //  один змінювач на двох
  changer = event => {
    const { name, value } = event.target;
    // console.log( event.currentTarget.value)
    this.setState({ [name]: value });
  };
  // відправник
  submiter = event => {
    event.preventDefault();
    const { name, number } = this.state;
    // виклик методу з ап і передача йому стейту з форми для зберігання
    this.props.formProps({ name, number });
    // очисник
    this.reset();
  };
  // очисник
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <form onSubmit={this.submiter} className={css.formsWr}>
        <label className={css.label}>
          Ім'я
          <input
            className={css.input}
            onChange={this.changer}
            value={this.state.name}
            // pattern= "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // ПАТЕРН ВИДАЄ ПОМИЛКУ В КОНСОЛІ
            type="text"
            placeholder="Введіть ім'я"
            title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
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
            onChange={this.changer}
            value={this.state.number}
            name="number"
            // pattern= "\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // ПАТЕРН ВИДАЄ ПОМИЛКУ В КОНСОЛІ

            title="Номер телефону має складатися з цифр і може містити пробіли, тире, круглі дужки та починатися з +"
            required
          />
        </label>

        <button className={css.buttons} type="submit">
          Додати контакт{' '}
        </button>
      </form>
    );
  }
}

// // прототайпи
ContactForm.propTypes = {
  formProps: PropTypes.func.isRequired,
};

export default ContactForm;
