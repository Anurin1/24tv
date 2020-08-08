import config from '../config/config'
import api from './api'

export async function fetchVideoURL(movie) {

  const res = await api.get(`movie/${movie.id}/videos?api_key=${config.movieKey}&language=${config.language}`);


  return res.data.results[0].key

 
}
