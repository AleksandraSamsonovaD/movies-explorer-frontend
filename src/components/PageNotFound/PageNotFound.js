
import { Link } from 'react-router-dom';

import './PageNotFound.css';

function PageNotFound () {
  return (
    <div className="notFound">
       <p className="notFound__num">404</p> 
       <p className="notFound__title">Страница не найдена</p>
      <Link className="notFound__button " to="/">Назад</Link>
    </div>
  )
}

export default PageNotFound;