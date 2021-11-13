import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import search from '../../images/search.svg';
import { useState } from 'react';

function SearchForm() {
  const [film, setFilm] = useState('');

  function filmChange(e) {
    setFilm(e.target.value);
  }
  return (
    <form className="searchForm">
        <div className="search">
          <input type="text" className="searchForm__text" name="film"
            placeholder="Фильм" value={film} onChange={filmChange} required />
          <button type="submit" className="searchForm__button"><img className="searchForm__logo" alt="Поиск" src={search} /></button>
        </div>
        <FilterCheckbox/>
    </form>
  );
}

export default SearchForm;
