import { Component } from 'react';


import ContactForm from  './ContactForm'
import  css from './ContactForm/ContactForm.module.css'




 export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }

// ***************

//  // Відповідає за оновлення стану
//  changer = event => {
//   this.setState({ login: event.target.value });
// };

// // Викликається під час відправлення форми
// submiter = event => {
//   event.preventDefault();
//   console.log(`Signed up as: ${this.state.name}`);

//   // Проп, який передається формі для виклику під час сабміту
//   this.props.onSubmit({ ...this.state });
// };
// ***************
 
  render() {
    return (
<div className={css.forms}>
  <h1>Телефонна книга</h1>
  <ContactForm/>
  <h2>Контакти</h2>
  {/* <Filter/> */}
  {/* <ContactList /> */}
</div>
     
    );
  }
}



           