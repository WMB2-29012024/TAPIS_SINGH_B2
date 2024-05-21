import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from "react";

function App() {
  const [column, setColumn] = useState([]);
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => {
        setColumn(Object.keys(data[0]));
        console.log({length:Object.keys( data[0]).length});
        setRecord(data);
        console.log({l2: data.length});
      });
  }, []);

  return (
    <div className="App">
      <table className='table'>
        <thead className='head'>
          <tr>
            {column.map((c, i) => (
              <th key={i}>{c}</th>
            ))}
          </tr>
        </thead>
        <tbody className='body'>
          {record.map((user, i) => ( 
            <tr key={i}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.street}, {user.address.suite}, {user.address.city}, {user.address.zipcode}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
