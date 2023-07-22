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
    contacts: [],
    filter: ''
  }
  // метод для передачі пропсом формі і зберігання з форми
formLister = data => {
   this.setState({contacts: [
    {id: nanoid(),
      name: data.name, 
      number: data.number} ]})    

// console.log(this.state.contacts.name, "dfffffffffffff")
// return contactListItem;
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
  {this.state.contacts &&  <ContactList
   contacts =    {this.state.contacts}
   /> }
 
  {/* <Filter/> */}
</div>
     
    );
  }
}
 


           