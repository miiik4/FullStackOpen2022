import Weather from './Weather';

const Country = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <span>capital {country.capital.map((capetal) => capetal + ' ')}</span>
      <br />
      <span>area {country.area}</span>
      <br />
      <h3>Languages</h3>
      <ul>
        {Object.entries(country.languages).map((language) => (
          <li key={language[1]}>{language[1]}</li>
        ))}
      </ul>
      <img src={country.flags.png} width="200" alt={country.name.common} />
      <Weather latlng={country.capitalInfo.latlng} />
    </div>
  );
};

export default Country;
