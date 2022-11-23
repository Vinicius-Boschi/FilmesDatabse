import Link from "next/link"

export default function Post({ movie }) {

  return (
    <div>
      <h1>Title: { movie.title }</h1>
      <button>
        <Link href="/">Voltar ao início</Link>
      </button>
    </div>
  )
}

export async function getServerSideProps( context ) {
  const { params } = context
  
  const key = "89088c5c3d55c787cf6ce7a00dfc52a0"
  const data = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${key}&language=pt-BR`)
  const movie = await data.json()

  return {
    props: {
      movie
    }
  }
}