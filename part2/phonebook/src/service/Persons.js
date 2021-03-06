import axios from 'axios';

const baseUrl = '/api/persons';

const create = (newPerson) => axios.post(baseUrl, newPerson);

const remove = (id) => axios.delete(`${baseUrl}/${id}`);

const update = (id, updatedInfo) => axios.put(`${baseUrl}/${id}`, updatedInfo);

// eslint-disable-next-line
export default { create, remove, update };
