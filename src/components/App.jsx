import { Component } from 'react';
import { nanoid } from 'nanoid';

import css from './ContactForm/ContactForm.module.css';

import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';

const  BEGINCONT = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export class App extends Component {
  state = {
    contacts: BEGINCONT,

    filter: '',
  };
  // метод для передачі пропсом формі і зберігання з форми
  formLister = data => {
    this.setState(prevState => {
      // оновлення списку доданих контактів після сабміту
      return {
        contacts: [
          ...prevState.contacts,
          ...[{ id: nanoid(), name: data.name, number: data.number }],
        ],
      };
    });
  };
  // для фільтрації
  filterContact = filtrDate => {
    this.setState(prevState => {

      // повернення списку післі чистки інпуту пошуку
      if(filtrDate.value === '' || filtrDate.value === ' ' ){
       return {  contacts: BEGINCONT }
      }
      
      else {
        return {
          filter: filtrDate.value,
          // else if ( filtrDate.value ){
          //   return
          // }
        // список післі фiльтрації без рeгістру
         contacts: prevState.contacts.filter(contact =>
           ((contact.name).toLowerCase()).includes(((filtrDate.value)).toLowerCase()))
             }};
    });
    console.log(filtrDate.value, '777777777777777777777', this.state.contacts );

  
  };


  //  для видалення
  deliter = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
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
          forFilter={this.filterContact}
        />
        {/* умова рендеру контактів */}

        {this.state.contacts.length > 0 && (
          <ContactList
           contacts={this.state.contacts} 
           deliter = {this.deliter}
           />
        )}
      </div>
    );
  }
}
