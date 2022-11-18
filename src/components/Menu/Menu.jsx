import { StyledMenu } from "./style"

export default function Menu({ searchValue, ...props }) {
  const infosMovies = Object.keys(props.movies)
  
  return (
    <>
      {infosMovies.map((infosMovie) => {
        const movies = props.movies[infosMovie]
        return (
          <StyledMenu>
            <div className="content" key={infosMovie}>
              <div className="infos">
                {movies
                  .filter((movie) => {
                    const titleNormalized = movie.title.toLowerCase()
                    const searchValueNormalized = searchValue.toLowerCase()
                    return titleNormalized.includes(searchValueNormalized)
                  })
                  .map((movie) => {
                    return (
                      <div className="card-image">
                        <img key={movie.picture} src={movie.picture} alt={movie.title} />
                        <div className="card-body">
                          <span className="name-movie">{movie.title}</span>
                          <p className="date-movie">{movie.date}</p>
                        </div>
                      </div>
                    )
                  })}
              </div>
            </div>
          </StyledMenu>
        )
      })}
    </>
  )
}