import { getAllMovies } from "../reducers/movies";

export function saveData(state) {
  const { popular } = getAllMovies(state);
  localStorage.setItem('24tvMovies', JSON.stringify({popular}));
}

export function loadData() {
  const data =  localStorage.getItem('24tvMovies');
  return JSON.parse(data)
}
