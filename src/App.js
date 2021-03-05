import {useState} from 'react';
import PersonCard from './components/PersonCard';
import './app.css';
import { Row, Col } from 'react-simple-flex-grid';
import "react-simple-flex-grid/lib/main.css";

function App() {

const [people,setPeople] = useState([]);


const addPerson = async () => {
  const url =  "https://api.randomuser.me/"
  const response = await fetch(url);
  const data = await response.json();
  const person = data.results[0];
  setPeople([...people, person]);
}
  return (
    <div className="App">
      <button onClick={addPerson}>Add Person</button>
      <Row gutter={40}>
      {people.map(person => (   
        <Col
        xs={{ span: 6 }} sm={{ span: 4 }} md={{ span: 3 }}
        lg={{ span: 2 }} xl={{ span: 1 }}>
        <PersonCard person={person}></PersonCard>
        </Col>
      ))}
      </Row>
    </div>
  );
}

export default App;
