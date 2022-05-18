const Persons = ({ filteredPersons, deletePerson }) => (
  <>
    {filteredPersons.map((person) => (
      <div key={person.id}>
        {person.name} {person.number} <button onClick={() => deletePerson(person.id)}>delete</button>
        <br />
      </div>
    ))}
  </>
);

export default Persons;
