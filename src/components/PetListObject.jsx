import React from 'react';
import api from '../tools/api';

export default function PetListObject(props) {
  const [isDisplayed, setIsDisplayed] = React.useState(true);
  const {pet} = props;

  function deletePet(petId) {
    api.delete(`/pet/${petId}`)
      .then(() => {
        setIsDisplayed(false);
        alert('Pet deleted!');
      })
      .catch((error) => {
        if(error.message){
          alert(error.message);
        }else{
          console.error(error);
        }
      })
  }

  return <>
    {isDisplayed && (
    <div className="pet">
      <p>id:  <span className="value">{pet.id}</span></p>
      <p>name: <span className="value">{pet.name}</span></p>
      {(pet.tags && pet.tags.length > 0) &&
      <div className="tags">
        <p>
          tags:
          {
            pet.tags.map((tag, index) => <span key={pet.id + 'tag' + index} className="tag">{tag.name}</span>)
          }
        </p>
      </div>
      }
      <div className="deleteIcon" onClick={() => deletePet(pet.id)}>
        <img src="/delete-icon.svg"  alt="delete"/>
      </div>
    </div>
    )}
  </>
}