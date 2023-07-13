import axios from "axios";

export interface Transfer {
  id: string;
  amount: number;
  title: string;
}

export const getTransfers = () => {
  return fetch('/account/transfers')
  .then(res => res.json())
  // .then(data => data.abcdefghij)
}

export const _getTransfers = (): Promise<Transfer[]> => {
  return fetch('/account/transfers')
  .then(res => res.json())
  // .then(data => data.abcdefghij)
}

// fetch nie obsługuje generyków

export const __getTransfers = (): Promise<Transfer[]> => {
  return axios.get('/account/transfers')
  .then(res => res.data)
  // .then(data => data.abcdefghij)
}

export const ___getTransfers = () => {
  return axios.get<Transfer[]>('/account/transfers')
  .then(res => res.data)
  // .then(data => data.abcdefghij)
}