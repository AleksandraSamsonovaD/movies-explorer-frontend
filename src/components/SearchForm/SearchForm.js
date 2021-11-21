import './SearchForm.css';
import FilterCheckbox from '../FilterCheckbox/FilterCheckbox';
import search from '../../images/search.svg';
import { useState } from 'react';

function SearchForm(props) {
  const [film, setFilm] = useState('');
  const [shortFilm, setShortFilm] = useState(true);

  function filmChange(e) {
    setFilm(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onSearch(film,shortFilm);

  }
  function returnCheck(check) {
    setShortFilm(check);
  }

  return (
    <form className="searchForm" onSubmit={handleSubmit}>
        <div className="search">
          <input type="text" className="searchForm__text" name="film"
            placeholder="Фильм" value={film} onChange={filmChange} required 
            onInvalid={(e)=>{e.target.setCustomValidity('Нужно ввести ключевое слово')}}/>
          <button type="submit" className="searchForm__button" ><img className="searchForm__logo" alt="Поиск" src={search} /></button>
        </div>
        <FilterCheckbox returnCheck={returnCheck}/>
    </form>
  );
}

export default SearchForm;
