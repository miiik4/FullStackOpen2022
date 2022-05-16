const Form = ({ newPerson, setPerson, addPerson }) => (
  <form>
    <div>
      name: <input value={newPerson.name} onChange={({ target }) => setPerson({ ...newPerson, name: target.value })} />
    </div>
    <div>
      number:
      <input value={newPerson.number} onChange={({ target }) => setPerson({ ...newPerson, number: target.value })} />
    </div>
    <div>
      <button type="submit" onClick={(event) => addPerson(event)}>
        add
      </button>
    </div>
  </form>
);

export default Form;
