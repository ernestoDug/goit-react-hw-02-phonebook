import ContactForm from  './ContactForm'
import { Component } from 'react';



 export class App extends Component {
  state = {
    contacts: [],
    name: ''
  }
  // Відповідає за оновлення стану
  // handleChange = e => {
  //   this.setState({ login: e.target.value });
  // };

  // // Викликається під час відправлення форми
  // handleSubmit = evt => {
  //   evt.preventDefault();
  //   console.log(`Signed up as: ${this.state.login}`);

  //   // Проп, який передається формі для виклику під час сабміту
  //   this.props.onSubmit({ ...this.state });
  // };

  render() {
    // const { login } = this.state;

    return (
      <ContactForm/>
     
    );
  }
}



           