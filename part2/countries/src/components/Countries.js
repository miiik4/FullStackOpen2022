import { useState } from 'react';
import Country from './Country';

const Countries = ({ countries, keyword }) => {
  const [preview, setPreview] = useState([]);

  const togglePreview = (name) => {
    preview.includes(name) ? setPreview(preview.filter((i) => i !== name)) : setPreview([...preview, name]);
  };

  if (countries.length !== 0 && keyword !== '') {
    const results = countries.filter((country) => country.name.common.toLowerCase().includes(keyword.toLowerCase()));

    if (results.length === 1) return <Country country={results[0]} />;

    if (results.length < 10)
      return results.map((country) => (
        <div key={country.name.common}>
          {country.name.common}{' '}
          <button type="button" onClick={() => togglePreview(country.name.common)}>
            {preview.includes(country.name.common) ? 'hide' : 'show'}
          </button>
          {preview.includes(country.name.common) && <Country country={country} />}
          <br />
        </div>
      ));

    return <div>Too many matches, specify another filter</div>;
  }

  return <></>;
};

export default Countries;
