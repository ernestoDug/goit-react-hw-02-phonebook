
// import PropTypes from 'prop-types';

import css from './Filter.module.css';


 const Filter= ({filterProp}) => {
  
    return (
      <>
        <input
          name="filter"
          className={css.filter}
          type="text"
          onChange={filterProp}
          // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="Введіть ім'я контакту"
          title="Ім'я може містити лише літери, апостроф, тире та пробіли. Наприклад Адріан, Джейкоб Мерсер, Шарль де Бац де Кастельмор д'Артаньян"
        />
      </>
    );
  }


// Filter.propTypes = {
//   value: PropTypes.string,
// };

export default Filter;
