import Link from "next/link"

export async function getStaticProps(context) {
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

export async function getStaticPaths() {
  return {
    paths: [
      { 
        params: { 
          id: '436270' 
        } 
      }, 
    ],
    fallback: false
  }
}

export default function Infos({ movie }) {
  return (
    <>
      <span>{ movie.title }</span>
      <h2>
        <Link href="/">Back to home</Link>
      </h2>
    </>
  )
}