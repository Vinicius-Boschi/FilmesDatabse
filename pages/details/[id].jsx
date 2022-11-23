import { StyledDetails } from "./style"

export default function Post({ movie }) {
  const backroundImage = `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`
  const date = new Date(movie.release_date)
  const formatedDate = new Intl.DateTimeFormat('pt-BR').format(date)
  const minute = movie.runtime
  const hour = minute / 60
  const rest = minute % 60
  const result = hour.toFixed(0) + "h" + rest + "m"
  
  return (
    <StyledDetails>
      <div className="custom-bg" style={{ backgroundImage: `url(${backroundImage})` }}>
        <div className="bg">
          <div className="infos">
            <div className="content">
              <div className="image">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title}/>
              </div>
              <div>
                <section>
                  <div className="titles">
                    <h1 className="title">{movie.title}</h1>
                    <div className="facts">
                      <span>{formatedDate} (BR)</span>
                        <div className="facts-infos">
                        {movie.genres.map((genre, index) => {
                          return (
                            <p key={index}>
                              <span>{genre.name}</span>
                            </p>
                          )
                        })}
                        </div>
                        <p>{result}</p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledDetails>
  )
}

export async function getServerSideProps(context) {
  const { params } = context

  const key = "89088c5c3d55c787cf6ce7a00dfc52a0"
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}&language=pt-BR`
  )
  const movie = await data.json()

  return {
    props: {
      movie,
    },
  }
}