// type Currency = 'PLN' | 'USD';

const config = {
  BASE_URL: 'http://example.com',
  locale: 'en-us',
  language: 'en',
  currency: 'USD' as Currency,
}

// typeof
type Config = typeof config;

// keyof
type KeysOfConfig = keyof Config;

// lookup
const tuple = ['PLN', 125, true] as const;

type First = typeof tuple[0];
type Second = typeof tuple[1];
type Other = typeof tuple[number];
// type Invalid = typeof[3]; // invalid

// return type
function produceOrder() {
  return {
    name: 'Shoes',
    category: 'sport',
    kind: 'workout'
  }
}

type Order = ReturnType<typeof produceOrder>

interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  age: number;
  salary: number;
}

type EmployeeCard = Pick<Employee, 'firstName' | 'lastName' | 'title'>
const myCard: EmployeeCard = {
  firstName: 'Jan',
  lastName: 'Kowalski',
  title: 'CTO',
}

type EmployeeOfficial = Omit<Employee, 'salary'>;
