import React from "react"
import Header from '../src/components/Header/Header'
import Menu from '../src/components/Menu/Menu'

function HomePage() {
    const [filterValue, setFilterValue] = React.useState("")

    return (
        <>
            <Header filterValue={filterValue} setFilterValue={setFilterValue}/>   
            <Menu filterValue={filterValue}/>
        </>
    )
}

export default HomePage