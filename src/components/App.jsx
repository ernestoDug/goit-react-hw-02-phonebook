import { Component } from 'react';


import ContactForm from  './ContactForm'
// import Filter from  './Filter'
import Contactlist from  './ContactList'
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
  const forContactList = data
  console.log(forContactList)
  this.setState(prevState => {
          return ({ name: prevState.name, number: prevState.number });
  });
  this.setState({
    contacts: forContactList,
  });  console.log(forContactList)
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
  <Contactlist
  name={this.state.contacts.name}
  number={this.state.contacts.number}
  
  />
  {/* <Filter/> */}
</div>
     
    );
  }
}
 


           