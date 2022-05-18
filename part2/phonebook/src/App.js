import './style.css'; // css

import { useEffect, useState } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import Form from './components/Form';
import Persons from './components/Persons';
import personService from './service/Persons';
import Alert from './components/Alert';

const intialPerson = { name: '', number: '' };

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newPerson, setPerson] = useState(intialPerson);
  const [filter, setFilter] = useState('');
  const [alert, setAlert] = useState();

  useEffect(() => {
    const timer = setTimeout(() => setAlert(null), 5000);
    return () => clearTimeout(timer);
  }, [alert]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/persons')
      .then((response) => {
        setPersons(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const addPerson = (e) => {
    e.preventDefault();

    const existingPerson = persons.find((person) => person.name === newPerson.name);

    if (existingPerson) {
      if (window.confirm('Are you sure you want to replace the old person?')) {
        personService
          .update(existingPerson.id, newPerson)
          .then((response) => {
            setPersons(persons.map((person) => (person.id !== existingPerson.id ? person : response.data)));
            setPerson(intialPerson);
            setAlert({ type: 'success', message: `${newPerson.name} has been updated.` });
          })
          .catch((error) => {
            setAlert({ type: 'error', message: `Unable to update ${newPerson.name}. Try refreshing the page.` });
          });
      }
      return;
    }

    personService
      .create(newPerson)
      .then((response) => {
        setPersons(persons.concat(response.data));
        setPerson(intialPerson);
        setAlert({ type: 'success', message: `${newPerson.name} has been added.` });
      })
      .catch((error) => {
        setAlert({ type: 'error', message: `Unable to add ${newPerson.name}.` });
      });
  };

  const deletePerson = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      personService
        .remove(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id));
          setPerson(intialPerson);
          setAlert({ type: 'success', message: `Person has been deleted.` });
        })
        .catch((error) => console.log(error));
    }
  };

  const filteredPersons = persons.filter((person) => person.name.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} setFilter={setFilter} />
      <h2>Add a new</h2>
      <Alert alert={alert} />
      <Form newPerson={newPerson} setPerson={setPerson} addPerson={addPerson} />
      <h2>Numbers</h2>
      <Persons filteredPersons={filteredPersons} deletePerson={deletePerson} />
    </div>
  );
};

export default App;
