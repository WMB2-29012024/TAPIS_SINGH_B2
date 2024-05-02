import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import CardComponent from './componet/CardComponent';
import FormComponent from './componet/FormComponent';

function App() {

  const [inputText, setinputText] = useState("");

  return (
    <div className="App">
     
      <FormComponent setinputText = {setinputText}/>
      <CardComponent inputText={inputText}/>
      
    </div>
  );
}

export default App;
