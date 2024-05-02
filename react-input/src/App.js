import logo from './logo.svg';
import './App.css';
import InputComponent from './component/InputComponent';
import TextComponent from './component/TextComponent';
import { useState } from 'react';


function App() {
  const [inputText,setInputText] = useState("");
  return (
    <div className="App">
      <InputComponent setInputText={setInputText}/>
      <TextComponent inputText = {inputText}/>
    </div>
  );
}

export default App;
