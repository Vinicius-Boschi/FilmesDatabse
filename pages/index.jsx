import React from "react"
import Header from '../src/components/Header/Header'
import Menu from '../src/components/Menu/Menu'
import config from '../config.json'

function HomePage() {
    const [filterValue, setFilterValue] = React.useState("")
    const [movies] = React.useState(config.movies)

    return (
        <>
            <Header filterValue={filterValue} setFilterValue={setFilterValue} />   
            <Menu searchValue={filterValue} movies={movies}/>
        </>
    )
}

export default HomePage