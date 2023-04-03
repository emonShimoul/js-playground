const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};

const displayCountries = (countries) => {
  // console.log(countries[0]);
  const container = document.getElementById("countries");
  const countryHTML = countries.map((country) => getCountryHTML(country));
  container.innerHTML = countryHTML.join(" ");
  // console.log(countryHTML[0]);
};
const getCountryHTML = (country) => {
  const { name, capital, flags, cca2 } = country;
  return `
        <div class="country">
            <h2>${name.common}</h2>
            <h4>Capital: ${capital}</h4>
            <img src="${flags.png}">
            <button onclick="loadCountryDetails('${cca2}')">Details</button>
        </div>
    `;
};

const loadCountryDetails = (code) => {
  console.log("details coming soon", code);
  const url = `https://restcountries.com/v3.1/alpha/${code}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetails(data[0]));
};

const displayCountryDetails = (country) => {
  const detailContainer = document.getElementById("country-detail");
  detailContainer.innerHTML = `
    <h2>Country Details</h2>
        <h3>Name: ${country.name.common}</h3>
        <p>Capital: ${country.capital}</p>
        <img src=${country.flags.png} alt="">
    `;
};

loadCountries();
