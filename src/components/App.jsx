import { Component } from 'react';


import ContactForm from  './ContactForm'
import  css from './ContactForm/ContactForm.module.css'


 export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: ''

  }

// ***************

//  //  оновлення 
 changer = event => {
  const {name, value} = event.currentTarget;
  // console.log( event.currentTarget.value)
  // зміна имені без залежності від старого
  // для одного обробчика на всих
this.setState ({[name]: value})


};

// // Викликається під час відправлення форми
submiter = event => {
  event.preventDefault();
  console.log(`Signed up as: ${this.state.name}`);

//   // Проп, який передається формі для виклику під час сабміту
  // this.props.onSubmit({ ...this.state });
// };
// ***************
};
 
  render() {
    return (
<div className={css.forms}>
  <h1>Телефонна книга</h1>
  <ContactForm
  // значення залежіть від стану
  names = {this.state.name}
  number={this.state.number}
  // меод який змінює 
  changer={ this.changer}
  // onChange={this.changer}
  // submiter = { this.submiter}
  
  />
  <h2>Контакти</h2>
  {/* <Filter/> */}
  {/* <ContactList /> */}
</div>
     
    );
  }
}
 


           