// TODO: Add your import statements here.
import {getRoles, getCompanies} from './salaryData.js';
import {getAverageSalaryByRole, getAverageSalaryByCompany, getSalaryAtCompany, getIndustryAverageSalary} from './workAroundModule.js';
import { formatNumber } from './modules/utilities.js';

// TODO: Get the companies and roles using the salaryData module.
const companies = getCompanies();
const roles = getRoles();

// Create input buttons for every company and role represented in the data.
renderInputButtons(companies, 'company');
renderInputButtons(roles, 'role');

// This function will create a new <section> with radio
// inputs based on the data provided in the labels array.
function displayResults(salary, averageSalaryByRole, averageSalaryByCompany, industryAverageSalary) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = `
      <p>Salary for selected role at selected company: $${salary}</p>
      <p>Industry average salary for selected role: $${averageSalaryByRole}</p>
      <p>Average salary at selected company: $${averageSalaryByCompany}</p>
      <p>Industry average salary: $${industryAverageSalary}</p>
    `;
  }
  

function renderInputButtons(labels, groupName) {
  const container = document.createElement('section');
  container.setAttribute('id', `${groupName}Inputs`);

  let header = document.createElement('h3');
  header.innerText = `Select a ${groupName}`;
  container.appendChild(header);

  labels.forEach(label => { // For each label...
    // Create the radio input element.
    let divElement = document.createElement('div');
    divElement.setAttribute('class', 'option');

    let inputElement = document.createElement('input');
    inputElement.setAttribute('type', 'radio');
    inputElement.setAttribute('name', groupName);
    inputElement.setAttribute('value', label);
    divElement.appendChild(inputElement);

    // Create a label for that radio input element.
    let labelElement = document.createElement('label');
    labelElement.setAttribute('for', label);
    labelElement.innerText = label;
    divElement.appendChild(labelElement);

    // Update the results when the input is selected.
    inputElement.addEventListener('click', updateResults);

    container.appendChild(divElement);
  });

  document.querySelector('main').prepend(container);
}

function updateResults() {
    const company = document.querySelector("input[name='company']:checked")?.value;
    const role = document.querySelector("input[name='role']:checked")?.value;
  
    if (!company || !role) {
      return;
    }
  
    const averageSalaryByRole = getAverageSalaryByRole(role);
    const averageSalaryByCompany = getAverageSalaryByCompany(company);
    const salary = getSalaryAtCompany(role, company);
    const industryAverageSalary = getIndustryAverageSalary();
  
    // Now render these values to the UI
    displayResults(salary, averageSalaryByRole, averageSalaryByCompany, industryAverageSalary);
  }

function displayResults(salary, averageSalaryByRole, averageSalaryByCompany, industryAverageSalary) {
    const resultsContainer = document.getElementById('resultsContainer');
    resultsContainer.innerHTML = `
      <p>Salary for selected role at selected company: $${formatNumber(salary)}</p>
      <p>Industry average salary for selected role: $${formatNumber(averageSalaryByRole)}</p>
      <p>Average salary at selected company: $${formatNumber(averageSalaryByCompany)}</p>
      <p>Industry average salary: $${formatNumber(industryAverageSalary)}</p>
    `;
  }


export {getDataByRole, getDataByCompany, getRoles, getCompanies}
