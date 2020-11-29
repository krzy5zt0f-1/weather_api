import React, {useState} from 'react';
import './App.css';
import App from './App';

function Select() {
  const [choice, setChoice] = useState(null)
  const [place, setPlace] = useState("");
  const handleSubmit = (evt) => {
      evt.preventDefault();
      alert(`Submitting City ${place}`)
      setChoice(place);
  }
  return (
    <div className="App-header">
    <form Style="background-color: #282c34;align-items: center;justify-content: center;display: flex;flex-direction: column;" onSubmit={handleSubmit}>
        <input
          Style="background-color: #282c34;align-items: center;justify-content: center;display: flex;flex-direction: column;color: rgb(34, 213, 230);"
          type="text"
          placeholder="Choose City"
          value={place}
          onChange={e => setPlace(e.target.value)}
        />

      <input Style="border: none;background-color: rgb(34, 213, 230);" type="submit" value="Submit" />
    </form>
    <div><App place={choice}/></div>
    </div>
  );
}

export default Select;
