/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/no-unused-vars */
interface Product {
  id: string;
  name: string;
  price: number;
}

let price = 8.57;

let priceExtended = {
  amount: 8.57,
  currency: 'PLN'
}


let salary: number;
let age: number;
let employmentInYears: number;
salary = 2;
age = 2
employmentInYears = 1

salary * age
age * age
salary + employmentInYears

// allowed operations:


console.log(price, priceExtended);