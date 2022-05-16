const Persons = ({ filteredPersons }) => (
  <>
    {filteredPersons.map((person) => (
      <div key={person.id}>
        {person.name} {person.number}
        <br />
      </div>
    ))}
  </>
);

export default Persons;
