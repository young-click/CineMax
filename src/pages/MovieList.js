
import { Token } from "../components"
import { useFetch } from "../components/hooks/useFetch";
export const MovieList = ({apiPath}) => {


  const {data: movies}= useFetch(apiPath);
  
  console.log(apiPath);

  return (
    <main>
      <section className="max-w-7xl mx-auto py-7 mt-16">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie)=>(
             <Token key={movie.id} movie={movie}/>
          ) )}     
        </div>
      </section> 
    </main>
  )
}
