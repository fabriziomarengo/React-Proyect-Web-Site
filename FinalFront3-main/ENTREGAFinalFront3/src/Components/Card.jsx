import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context';

const Card = ({ id, name, username }) => {
  const { state, dispatch } = useAppContext();

  const isFavorited = state.favorites.includes(id);

  const addFav = () => {
    console.log('Estado de favorites antes de agregar:', state.favorites);

    if (!isFavorited) {
      dispatch({ type: 'ADD_TO_FAVORITES', payload: id });
    } else {
      dispatch({ type: 'REMOVE_FROM_FAVORITES', payload: id });
    }

    console.log('Estado de favorites después de agregar/eliminar:', state.favorites);
  };

  const buttonText  = isFavorited ? (<img className="fav" src="\images\ERRORcross.png" alt="Quitar de favoritos"></img>) : (<img className="fav" src="\images\Estrella_amarilla.png" alt="Agregar a favoritos"></img>);

  return (
    <div className="card">
      <img
        src="images\doctor.jpg"  alt="dentista"/>
      <h2> <Link to={`/dentista/${id}`} className="link-button">{name}</Link></h2>
      <button onClick={() => addFav(id)} className="fav-button">
        {buttonText}
      </button>
    </div>
  );
};
export default Card;