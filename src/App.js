import React from 'react'
import './App.css'
import SearchIcon from './SearchIcon.svg'
import { useEffect , useState } from 'react'
import MovieCard from './MovieCard'
const API_URL = 'http://www.omdbapi.com/?i=tt3896198&apikey=c4006a30';
const App = () => {
const [movies , setMovies] = useState([]);
const [searchTerm , setSearchTerm] = useState('')
  const searchMovie = async (tittle)=>{
    const response = await fetch(`${API_URL}&s=${tittle}`);
    const data = await response.json();
    setMovies(data.Search);
  }
  useEffect(()=>{
    searchMovie('Batman');
  },[]);
  return (
    <div className='app'>
      <h1>MovieLand</h1>
      <div className='search'>
        <input
        placeholder='Search Movies'
        value={searchTerm}
        onChange={(e)=>setSearchTerm(e.target.value)}
        />
        <img
        src={SearchIcon}
        alt='search icon'
        onClick={()=>searchMovie(searchTerm)}
        /> 
      </div>
    {
    movies.length>0 ?(
      <div className='container'>
      {
        movies.map((movie)=>(
          <MovieCard movie={movie}/>
        ))
      }
      </div>
    ) :(
      <div className='empty'>
        <h2>No Movie Found ! </h2>
      </div>
    )
    }
    </div>
  )
}

export default App





