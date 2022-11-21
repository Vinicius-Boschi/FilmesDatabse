import React from "react"
import Header from "../src/components/Header/Header"
import Menu from "../src/components/Menu/Menu"

function HomePage() {
  const [filterValue, setFilterValue] = React.useState("")
  const [movies, setMovies] = React.useState({})

  React.useEffect(() => {
    const key = "89088c5c3d55c787cf6ce7a00dfc52a0";
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=pt-BR`)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        setMovies(data.results) 
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <>
      <Header filterValue={filterValue} setFilterValue={setFilterValue} />
      <Menu searchValue={filterValue} movies={movies} />
    </>
  )
}

export default HomePage