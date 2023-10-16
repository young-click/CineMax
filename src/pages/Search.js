import { useSearchParams } from "react-router-dom";
import { Token } from "../components"
import { useFetch } from "../components/hooks/useFetch";

export const Search = ({apiPath}) => {
  const [searchParams]=useSearchParams();
  const queryTerm=searchParams.get("q");
  const {data: movies}= useFetch(apiPath, queryTerm);

  return (
    <main>
      <section>
        <p className="text-3xl text-gray-700 dark:text-white">{movies.length===0?`No result found for '${queryTerm}'` : `Results for '${queryTerm}' `}</p>
      </section>
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex justify-start flex-wrap">
        {movies.map((movie)=>(
           <Token key={movie.id} movie={movie}/>
        ) )}     
      </div>
    </section> 
  </main>
  )
}
