import { StyledHeader } from "./style"

export default function Header({ filterValue, setFilterValue }) {
  const searchValue = filterValue
  const setSearchValue = setFilterValue

  return (
    <StyledHeader>
      <h1>Movies</h1>
      <div className="input-search">
        <input type="text" placeholder="Pesquise o filme" onChange={(e) => setSearchValue(e.target.value)} value={searchValue}/>
      </div>
    </StyledHeader>
  )
}