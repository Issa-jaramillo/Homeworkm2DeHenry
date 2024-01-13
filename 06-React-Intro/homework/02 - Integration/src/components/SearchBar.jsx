import React, { useState } from 'react';

export default function SearchBar({ onSearch }) {
  const [id, setId] = useState('');

  const handleChange = (event) => {
    setId(event.target.value);
  };
  const search = () =>{
     onSearch('ID del personaje')
     setId('')
  }

  return (
    <div>
      <input type='search' onChange={handleChange}
      placeholder='Ingresa un ID' value={id} />
      <button onClick={search}>Agregar</button>
    </div>
  );
}
