export default function Cast({ movie }) {
    console.log('MAIN', movie)
    // return (
    //     <div className="column">
    //         <div className="content-column">
    //             <section className="panel">
    //                 <h2 className="title-panel">Elenco Principal</h2>
    //                 <div className="carousel-cards">
    //                     <ul className="lists">
    //                         <li className="cards">
    //                             <img className="picture" src="" alt="" />
    //                             {/* <p className="name-card">{movie.name}</p> */}
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </section>
    //         </div>
    //     </div>
    // )
}

export async function getServerSideProps(context) {
  const { params } = context

  const key = "89088c5c3d55c787cf6ce7a00dfc52a0"

  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${params.id}/credits?api_key=${key}&language=pt-BR`
  )
  const movie = await data.json()

  return {
    props: {
      movie
    }
  }
}