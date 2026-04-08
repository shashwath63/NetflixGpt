import { IMG_CDN_URL } from '../utils/constant'

const MovieCard = ({poster_path}:any) => {
  if (!poster_path) return null;
  return (
        <div className="w-36 md:w-48 pr-4 hover:scale-105 transition-transform duration-300 cursor-pointer overflow-hidden">
            <img className="rounded-lg shadow-lg" src={IMG_CDN_URL + poster_path} alt="Movie Poster" />
        </div>
  )
}

export default MovieCard
