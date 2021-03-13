import React from 'react';
import '../stylesheets/PetsList.css'
import PetListObject from "./PetListObject";

export default function PetsList(props) {
  const pets = props.pets;

  return (
    <div className="petsList">
      {pets.map((pet, index) => (
        <PetListObject key={'pet' + index} pet={pet}/>
      ))}
    </div>
  );
}