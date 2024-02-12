import React from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context';



const Navbar = () => {
  const { dispatch } = useAppContext();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
  };
  return (
    <nav className="navbar">
      <h2 className="nav-title">DH ODONTOLOGIA</h2>
  <ul className="navbar-list">
    <li className="navbar-item"><Link to="/">Inicio</Link></li>
    <li className="navbar-item"><Link to="/favs"> Favoritos</Link></li>
    <li className="navbar-item"><Link to="/contact">Contacto</Link></li>
  </ul>
  <div>
    <button className="tema-boton" onClick={toggleTheme}></button>
  </div>
</nav>
  )
}

export default Navbar