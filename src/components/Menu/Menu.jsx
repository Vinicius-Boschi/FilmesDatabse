import { StyledMenu } from "./style"
// import { config } from "../../config"

export default function Menu({ searchValue, ...props }) {
  const infosMovies = Object.keys(props.movies)

  return (
    <>
      {infosMovies.map((info) => {
        const movies = props.infos[info]
        return (
          <StyledMenu>
            <div className="content" key={info}>
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
                        <img src={movie.picture} alt="" />
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