import getConfig from "next/config";

import { fetchWrapper } from "helpers";

// projet.service declare les routes qu on va utiliser dans l 'api
// methode fetch pour le crud  des projet
const { publicRuntimeConfig } = getConfig();
// routes pour acceder a l api
const baseUrl = `${publicRuntimeConfig.apiUrl}/projets`;

export const projetService = {
  register,
  getAll,
  getById,
  update,
  delete: _delete,
  getVariousBack,
  getVariousFront,
  getVariousProf,
};

async function register(projet) {
  await fetchWrapper.post(`${baseUrl}/register`, projet);
}

async function getAll() {
  return await fetchWrapper.get(baseUrl);
}

async function getVariousBack() {
  return await fetchWrapper.get(`${baseUrl}/variousBack`);
}

async function getVariousFront() {
  return await fetchWrapper.get(`${baseUrl}/variousFront`);
}

async function getVariousProf() {
  return await fetchWrapper.get(`${baseUrl}/variousProf`);
}

async function getById(id) {
  return await fetchWrapper.get(`${baseUrl}/${id}`);
}

async function update(id, params) {
  await fetchWrapper.put(`${baseUrl}/${id}`, params);
}

// prefixed with underscored because delete is a reserved word in javascript
async function _delete(id) {
  await fetchWrapper.delete(`${baseUrl}/${id}`);
}
