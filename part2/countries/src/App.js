import { useState, useEffect } from 'react';
import axios from 'axios';
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [keyword, setKeyword] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then((response) => setCountries(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      find countries <input type="text" name="search" value={keyword} onChange={({ target }) => setKeyword(target.value)} />
      <Countries keyword={keyword} countries={countries} />
    </div>
  );
};

export default App;
