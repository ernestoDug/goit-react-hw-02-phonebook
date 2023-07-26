import { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm/ContactForm.module.css';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

let begincontact = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];
export class App extends Component {
  state = {
    contacts: begincontact,
    // begincontact,
    filter: '',
  };
  // метод для передачі пропсом формі і зберігання з форми
  formLister = data => {
    const addCopy = this.state.contacts.find(
      // заборона додавання однакових імен
      contact => contact.name.toLowerCase() === data.name.toLowerCase()
    );
    // console.log(addCopy, "copy")
    if (addCopy) {
      alert(`Уважніше,  ${data.name}  вже записана в контактах `);
      return;
    }
    // оновлення списку доданих контактів після сабміту
    this.setState(prevState => {
      return {
        contacts: [
          ...prevState.contacts,
          ...[{ id: nanoid(), name: data.name, number: data.number }],
        ],
      };
    });
  };

  //метод пропс  для  зняття воду з інпуту фільтру
  formFilter = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    // console.log(this.state.filter, "st")

    // для фільтрації
    const contactJam = begincontact.filter(contact =>
      contact.name.toLowerCase().includes([value.toLowerCase()])
    );
    this.contactFilter(contactJam);
    //  console.log(contactJam)
  };

  // для оновлення контактів після фільтр процедур
  contactFilter = contactJam => {
    if (contactJam) {
      this.setState(prevState => {
        return {
          contacts: contactJam,
        };
      });
    }
  };

  //  для видалення
  deliter = id => {
    const goodBayContact = this.state.contacts.filter(
      contact => contact.id !== id
    );
    this.setState(prevState => ({
      contacts: goodBayContact,
    }));
  };

  render() {
    return (
      <div className={css.forms}>
        <h1>Телефонна книга</h1>
        <ContactForm
          // пропс метод для зберігання після саб з форми
          formProps={this.formLister}
        />
        <h2>Контакти</h2>
        <h5>ЗНАЙдіть конТАКт за ім'ям</h5>
        <Filter
          // методпропс фільтрації
          filterProp={this.formFilter}
        />
        {/* умова рендеру контактів */}

        {this.state.contacts.length > 0 && (
          <ContactList contacts={this.state.contacts} deliter={this.deliter} />
        )}
      </div>
    );
  }
}
