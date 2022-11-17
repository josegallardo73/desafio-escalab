import {
    fetchData,
    filterForm,
    filterSelect,
    printFlags,
} from '../helpers/functions.js';

const d = document;
const infocountries = d.querySelector('#infocountries');
const form = d.querySelector("#form");
const inputForm = d.querySelector("#inputForm");
const selectedOption = d.querySelector('.selected-option');
const selectValue = d.querySelector('.select-value');
const optionsContainer = d.querySelector('.regions');
const optionList = d.querySelectorAll('.option');


const loadSelectOptions = () => {
    optionList.forEach((option) => {
        option.addEventListener('click', (e) => {
            updateSelectValue(option);
            selectToggle();
            filterSelect(option.textContent);
        });
    });
}

const selectToggle = () => {
    if(optionsContainer.dataset.toggle == 'collapsed') optionsContainer.dataset.toggle = '';
    else optionsContainer.dataset.toggle = 'collapsed';
}


const updateSelectValue = (option) => {
    selectValue.textContent = option.textContent;
}


document.addEventListener("DOMContentLoaded", async e => {
    try {
        loadSelectOptions();
        const allCountries = await fetchData();
        printFlags(allCountries);
    } catch(error) {
        console.log(error);
    } 
});

selectedOption.addEventListener('click', selectToggle);

form.addEventListener("keyup", (e) => {
    e.preventDefault();
    filterForm();
});





