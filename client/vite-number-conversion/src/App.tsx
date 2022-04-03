import './App.css';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [wage, setWage] = useState(0);

  const [employees, setEmployees] = useState([]);

  const addEmployee = () => {
    axios
      .post('http://localhost:3001/create', {
        name: name,
        age: age,
        country: country,
        position: position,
        wage: wage,
      })
      .then(() => {
        console.log('success');
      });
  };

  const getEmployees = () => {
    axios
      .get('http://localhost:3001/employees')
      .then((res) => {
        setEmployees(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <div className="information">
        <label>Name</label>
        <input
          type="text"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <label>Age</label>
        <input
          type="number"
          onChange={(event) => setAge(parseInt(event.target.value))}
        />
        <label>Country</label>
        <input
          type="text"
          onChange={(event) => {
            setCountry(event.target.value);
          }}
        />
        <label>Position</label>
        <input
          type="text"
          onChange={(event) => {
            setPosition(event.target.value);
          }}
        />
        <label>Wage (year)</label>
        <input
          type="number"
          onChange={(event) => {
            setWage(parseInt(event.target.value));
          }}
        />
        <button onClick={addEmployee}>Add Employer</button>
      </div>
      <span>
        <hr />
      </span>
      <div className="getEmployee">
        <button onClick={getEmployees}>Show Employees</button>
      </div>
    </div>
  );
}
export default App;
