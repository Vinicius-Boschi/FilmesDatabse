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
              <div className="posters-infos">
                <section>
                  <div className="titles">
                    <h1 className="title">{movie.title}</h1>
                    <div className="facts">
                      <span>{formatedDate} (BR)</span>
                        <div className="facts-infos">
                        {movie.genres.map((genre, index) => {
                          return (
                            <span key={index}>{genre.name}</span>
                          )
                        })}
                         <span className="hour">{result}</span>
                        </div>
                    </div>
                    <div className="header-info">
                      <h3 className="tagline">{movie.tagline}</h3>
                      <h3 className="synopsis">Sinopse</h3>
                      <div className="overview">
                        <p>{movie.overview}</p>
                      </div>
                      <ol className="enterprises">
                        <li className="profile">
                          {movie.production_companies.map((company, index) => {
                            return (
                              <p>
                                <img key={index} src={`https://image.tmdb.org/t/p/w500${company.logo_path}`} alt={company.name}/>
                              </p>
                            )
                          })}
                        </li>
                      </ol>
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
      movie 
    },
  }
}

// Elenco Principal:
//https://api.themoviedb.org/3/movie/436270/credits?api_key=89088c5c3d55c787cf6ce7a00dfc52a0&language=pt-BR

// Palavras-chave:
// https://api.themoviedb.org/3/movie/436270/keywords?api_key=89088c5c3d55c787cf6ce7a00dfc52a0

// Recomendações:
// https://api.themoviedb.org/3/movie/436270/recommendations?api_key=89088c5c3d55c787cf6ce7a00dfc52a0&language=pt-BR&page=1

// Reviews: 
// https://api.themoviedb.org/3/movie/436270/reviews?api_key=89088c5c3d55c787cf6ce7a00dfc52a0&language=pt-BR&page=1

// Filmes similares:
// https://api.themoviedb.org/3/movie/436270/similar?api_key=89088c5c3d55c787cf6ce7a00dfc52a0&language=pt-BR&page=1

// Vídeos:
// https://api.themoviedb.org/3/movie/436270/videos?api_key=89088c5c3d55c787cf6ce7a00dfc52a0&language=pt-BR

// Mais Populares:
// https://api.themoviedb.org/3/movie/top_rated?api_key=89088c5c3d55c787cf6ce7a00dfc52a0&language=pt-BR&page=1

// Próximos Lançamentos:
// https://api.themoviedb.org/3/movie/upcoming?api_key=89088c5c3d55c787cf6ce7a00dfc52a0&language=pt-BR&page=1

// Biografia dos atores: 
// https://api.themoviedb.org/3/person/18918?api_key=89088c5c3d55c787cf6ce7a00dfc52a0&language=en-US