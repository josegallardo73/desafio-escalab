const fetchCountry = async (country_name) => {
    try {
        const response = await (fetch(`https://restcountries.com/v2/name/${country_name}`));
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}

const getParamURL =  () => {
    const param = new URLSearchParams(window.location.search);
    if(param.get('name')) {
        const country_name = param.get('name');
        return country_name;
    } window.location = '404.html';
}


const printCountry = (data) => {

    const infoCountry = [...data];
    let dataCountry = '';
    infoCountry.forEach( country => {
        dataCountry += `<article class="card">
                            <img src="${country.flag}" alt="${country.name}" class="img-fluid">
                            <div class="card-content">
                                <h3>${country.name}</h3>
                                <p>
                                    <strong>Population: </strong>
                                    ${country.population}
                                </p>
                                <p>
                                    <strong>Capital: </strong>
                                    ${country.capital}
                                </p>
                                <p>
                                    <strong>Region: </strong>
                                    ${country.region}
                                </p>
                                </div>
                            <div class="card-content">
                                <p>
                                    <strong>Borders: </strong>
                                    ${country.borders}
                                </p>
                                <p>
                                    <strong>Languages: </strong>
                                    ${country.languages[0].name}
                                </p>
                                    <strong>timezones: </strong>
                                    <span class="timezones">${country.timezones}</span>
                                </p>
                                </p>
                                    <button class="btn-detail" id="back">Volver</button>
                                </p>
                            </div>
                        </article>`;
    });
    infocountry.innerHTML = dataCountry;
}

const filterSelect = async (regionValue) => {
    try {
        const allCountries = await fetchData();
        if(regionValue == 'All Regions') filterSelectDefault();
        const filterRegion = allCountries.filter((country) => country.region === regionValue); 
        printFlags(filterRegion);
    } catch(error) {
        console.log(error);
    }
};       

const filterSelectDefault = async () => {
    try {
        const allCountries = await fetchData();
        printFlags(allCountries);
    } catch(error) {
        console.log(error);
    }
    
}

const filterForm = async () => {
    try {
        const key = inputForm.value.toLowerCase();
        const arrCountries = await fetchData();
        const filterCountries = arrCountries.filter((country) => {
        const nameCountry = country.name.toLowerCase();
        if(nameCountry.startsWith(key)) return country;
        });
        printFlags(filterCountries);
    } catch(error) {
        console.log(error);
    }
        
}

const fetchData = async () => {
    try {
        const response = await (fetch("https://restcountries.com/v2/all"));
        const data = await response.json();
        return data;
    } catch(error) {
        console.log(error);
    }
}

const printFlags = (data) => {

    const allCountries = [...data];
    let countries = '';  
    try {
        allCountries.forEach((country) => {
            countries += 
        `<article class="card">
            <img src="${country.flag}" alt="${country.name}" class="img-fluid">
            <div class="card-content">
                <h3>${country.name}</h3>
                <p>
                    <strong>Population: </strong>
                    ${country.population}
                </p>
                <p>
                    <strong>Capital: </strong>
                    ${country.capital}
                </p>
                <p>
                    <strong>Region: </strong>
                    ${country.region}
                </p>
                <p>
                    <a class="btn-detail" href="detail.html?name=${country.name}">Ver detalle</a>
                </p>
            </div>
        </article>`;
        });
        infocountries.innerHTML = countries;
    } catch (error) {
        console.log(error);
    }  
} 


export {fetchCountry, getParamURL, printCountry, filterSelect, filterSelectDefault, filterForm, printFlags, fetchData}