import {
    fetchCountry,
    getParamURL,
    printCountry
    } from '../helpers/functions.js'

const infocountry = document.querySelector('#infocountry');

const country_name = getParamURL();
const data = await fetchCountry(country_name);
printCountry(data);

const volver = document.querySelector('#back');
volver.addEventListener('click', () => window.location = './index.html');









