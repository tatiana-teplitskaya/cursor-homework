const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 }; 
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 }; 
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary){
    return this.tax * salary;
}

function getMiddleTaxes(){
    return this.middleSalary * this.tax;
}

function getTotalTaxes(){
    return this.middleSalary * this.tax * this.vacancies;
}

function getMySalary(country){
    function makeSalaryObject(){
        const min = 1500;
        const max = 2000;
        const salary = Math.floor(min + Math.random() * (max + 1 - min));
        const taxes = country.tax * salary;
        const profit = salary - taxes;
        console.log(JSON.stringify({salary, taxes, profit}));
    }
    setInterval(makeSalaryObject, 10000);
}

console.log(`getMyTaxes.call(ukraine, 1000): ${getMyTaxes.call(ukraine, 1000)}`);
console.log(`getMiddleTaxes.call(ukraine): ${getMiddleTaxes.call(ukraine)}`);
console.log(`getMiddleTaxes.call(latvia): ${getMiddleTaxes.call(latvia)}`);
console.log(`getMiddleTaxes.call(litva): ${getMiddleTaxes.call(litva)}`);
console.log(`getTotalTaxes.call(ukraine): ${getTotalTaxes.call(ukraine)}`);
console.log(`getTotalTaxes.call(latvia): ${getTotalTaxes.call(latvia)}`);
console.log(`getTotalTaxes.call(litva): ${getTotalTaxes.call(litva)}`);
getMySalary(ukraine);




