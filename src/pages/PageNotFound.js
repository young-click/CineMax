import { Link } from "react-router-dom"
import notFound from "../assets/mistake-1966448_1920.jpg"

export const PageNotFound = () => {
  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
            <p className="text-7xl text-gray-700 font-bold my-10 dark:text-white">404, OOPS!</p>
            <div className="max-w-lg">
            <img src={notFound} className="rounded"alt="ERRIMAGE" />
            </div>
        </div>

        <div className="flex justify-center my-4">
            <Link to="/">
            <button className="rounded-lg px-5 py-2.5 mr-2 mb-2 font-medium text-white w-64 text-xl bg-gradient-to-r from-blue-500 via-blue-600 to to-blue-700">Back To Home</button>
            </Link>
        </div>
      </section>
    </main>
  )
}
