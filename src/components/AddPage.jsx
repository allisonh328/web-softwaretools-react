import React from 'react';
import api from '../tools/api';
import '../stylesheets/AddPage.css'

export default function AddPage() {
  const [name, setName] = React.useState("")
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [message, setMessage] = React.useState('')

  function handleSubmit(event){
    event.preventDefault();
    if(name === ''){
      setMessage('The name is required!');
      setIsSuccess(false);
      return;
    }
    api.post('/pet', {
      name: name,
    }).then(response => {
      setMessage(`Pet has been created with id: ${response.data.id}!`);
      setIsSuccess(true);
    }).catch((e) => {
      setMessage('Something went wrong! Could not add the pet.');
      setIsSuccess(false);
      console.error(e);
    });
  }

  return <div className="addPage">
    {message !== '' && <p className={`message ${isSuccess === true ? 'success' : 'error'}`}>{message}</p>}
    <form onSubmit={handleSubmit}>
      <label>Name</label>
      <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
      <input type="submit" value="Add"/>
    </form>
  </div>;
}