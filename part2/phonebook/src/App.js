import { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';

const intialPerson = { name: '', number: '' };

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setPerson] = useState(intialPerson);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const doesPersonExist = (newPerson) => persons.find((person) => person.name === newPerson.name);

  const addPerson = (e) => {
    e.preventDefault();

    if (doesPersonExist(newPerson)) {
      alert(`${newPerson.name} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat({ ...newPerson, id: persons.length }));
    setPerson(intialPerson);
  };

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <Form newPerson={newPerson} setPerson={setPerson} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} />
    </div>
  );
};

export default App;
