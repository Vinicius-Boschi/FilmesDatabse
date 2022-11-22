import { StyledMenu } from "./style"
import Link from 'next/link'

export default function Menu({ searchValue, ...props }) {
  const infosMovies = Object.values(props.movies)

  return (
    <StyledMenu>
      <div className="content">
        <div className="infos">
          {infosMovies.map((infosMovie) => {
            let movies = [infosMovie]

            return movies
              .filter((movie) => {
                if (searchValue === "") {
                  return movie
                } else if (
                  movie.title.toLowerCase().includes(searchValue.toLowerCase())
                ) {
                  return movie
                }
              })
              .map((movie) => {
                return (
                  <div className="card-image" key={movie.id}>   
                    <Link href={`/details/${movie.id}`} target="_blank">
                      <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                    </Link>
                    <div className="card-body">
                      <span className="name-movie">{movie.title}</span>
                      <p className="date-movie">{movie.date}</p>
                    </div>
                  </div>
                )
              })
          })}
        </div>
      </div>
    </StyledMenu>
  )
}