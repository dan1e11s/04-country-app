let input = document.querySelector('#inp');
let button = document.querySelector('#btn');
let box = document.querySelector('.container');

const fetchCountry = async (e) => {
  e.preventDefault();
  let res = input.value;
  input.value = '';
  let response = await fetch(`https://restcountries.com/v3.1/name/${res}`);
  let country = await response.json();
  console.log(country);
  if (!country.message) {
    country.forEach((item) => {
      box.innerHTML = `
                          <div class="card" style="width: 18rem">
                              <img src="${
                                item.flags.png
                              }" class="card-img-top" alt="..." />
                              <div class="card-body">
                              <h5 class="card-title">${item.name.common}</h5>
                              <p class="card-text" style="font-style: italic; font-size: 14px;">${
                                item.continents
                              }</p>
                              <p>Capital: <b>${item.capital}</b></p>
                              <p>Population: <b>${item.population}</b></p>
                              <p>Language: <b>${
                                Object.values(item.languages)[0]
                              }</b></p>
                              </div>
                          </div>
                      `;
    });
  } else {
    box.innerHTML = `
            <h2>${country.message}</h2>
        `;
  }
};

button.addEventListener('click', (e) => fetchCountry(e));
