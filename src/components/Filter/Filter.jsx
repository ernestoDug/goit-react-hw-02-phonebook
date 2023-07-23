import { Component } from 'react';


import css  from "./Filter.module.css";

export class Filter extends Component {
    state = { filter: ""};
    //  //  один змінювач на всих
    changer = event => {
      const { value } = event.target;
      // console.log( event.currentTarget.value)
      this.setState({ filter: value });
    //   поверненя значення
      this.props.forFilter({ value });

    };
    
  render() {
return (
    <>  
     <input
      name = "filter" 
     className={css.filter}
    type="text"
    onChange={this.changer}
    value={this.state.filter}
    // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    placeholder="Введіть ім'я контакту"
    title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
        />
    </>
)
}
}




export default Filter