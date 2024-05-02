import logo from './logo.svg';
import './App.css';
import Button from './Component/Button';
import Count from './Component/CountComponent';

import { useState } from 'react';
import CountComponent from './Component/CountComponent';

function App() {

  const [count , setCount] = useState(3);
  return (
    <div className="App">
      <CountComponent countNumber = {count}/>
      <Button setCount={setCount}/>

      
      
    </div>
  );
}




export default App;
