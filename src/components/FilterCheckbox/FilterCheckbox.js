import './FilterCheckbox.css';

function FilterCheckbox() {
  return (
    <label className="filterCheckbox">
      <input type="checkbox" defaultChecked/>
      <span className="checkbox"></span>
      <p className="checkbox__label">Короткометражки</p>
  </label>
  );
}

export default FilterCheckbox;
