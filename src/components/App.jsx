import { Component } from 'react';
import { nanoid } from 'nanoid';


import ContactForm from  './ContactForm'
// import Filter from  './Filter'
import ContactList from  './ContactList'
// import  css from './ContactList/ContactList.module.css'

import  css from './ContactForm/ContactForm.module.css'
// import  css from './Filter/Filter.module.css'



 export class App extends Component {

  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
        filter: ''
  }
  // метод для передачі пропсом формі і зберігання з форми
formLister = data => {
this.setState(prevState => {
  // оновлення списку доданих контактів
    return ({ contacts: [...prevState.contacts, ...[
      {id: nanoid(),
        name: data.name, 
        number: data.number}] ]
      
      }) ;
  });
}



  render() {
    return (
<div className={css.forms}>
  <h1>Телефонна книга</h1>
  <ContactForm
// пропс метод для зберігання з форми
  formProps = {this.formLister}
  //   names = {this.name}
  // number={this.number}
  // changer={ this.changer}
  // submiter = { this.submiter}
    />
  <h2>Контакти</h2>
  {/* умова рендеру контактів */}
  {this.state.contacts.length > 0 && ( <ContactList
   contacts = {this.state.contacts}
   />) }
 
  {/* <Filter/> */}
</div>
     
    );
  }
}
 


           