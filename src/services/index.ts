import axios from "axios";

export const api = axios.create({ baseURL: `https://pokeapi.co/api/v2/` });

export const idApi='ac4161c5-12c4-4d38-97bb-0bfa95fc69c4'
export const apiRecords=axios.create({baseURL:"https://jsonstorage.net/api/items/"})