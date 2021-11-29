import './FilterCheckbox.css';
import { useState } from 'react';

function FilterCheckbox(props) {
  const [shortFilm, setShortFilm] = useState(true);

  function shortFilmChange(e) {
    setShortFilm(!shortFilm);
    props.returnCheck(!shortFilm);
  }
  return (
    <label className="filterCheckbox">
      <input type="checkbox" defaultChecked onChange={shortFilmChange}/>
      <span className="checkbox"></span>
      <p className="checkbox__label">Короткометражки</p>
  </label>
  );
}

export default FilterCheckbox;
