import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams(); 
  const [dentista, setDentista] = useState(null);

  useEffect(() => {
   
    const fetchData = async () => {
      try {
        
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        if (!response.ok) {
          throw new Error('No se pudo obtener la información del dentista');
        }
        const data = await response.json();
        setDentista(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className='detalles'>
      <h1>Detalle del Dentista</h1>
      {dentista ? (
        <div className='detalles'>
          <img src= "../images/doctor.jpg" alt="dentista" />
          <h2> {dentista.name}</h2>
          <p> Email: {dentista.email}</p>
          <p> Tel: {dentista.phone}</p>
          <a href=""><p> {dentista.website}</p></a>
        </div>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default Detail;