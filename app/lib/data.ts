import axios from "axios";

const starWarsAPI = axios.create({
  baseURL: "https://sw-api.starnavi.io",
});

export const fetchHeroes = async (page = 1) => {
  const response = await starWarsAPI.get(`/people/?page=${page}`)
  return response.data
}

export const fetchHeroById = async (heroId: number) => {
  const response = await starWarsAPI.get(`/people/${heroId}`)
  return response.data
}

export const fetchFilmsByHeroId = async (heroId: number) => {
  const response = await starWarsAPI.get(`/films/?characters=${heroId}`)
  return response.data
}

export const fetchStarshipsByHeroId = async (heroId: number) => {
  const response = await starWarsAPI.get(`/starships/?pilots=${heroId}`)
  return response.data
}
