import { useEffect } from "react";
import "./styles.css";

export default function App(){
  const fetchData = async ( ) => {
    const data = await fetch("https://dummyjson.com/recipes/search?q="");
    setResults
  };

useEffect( () => {
  const time = setTimeout(fetchData, 300);

  return ( ) => {
    clearTimeout((timer));
  }

}, [input] );

  return(
    <div>
      <h1>
        Autocomplete Search Bar
      </h1>
      <div>
        <input type = "text" className="search-input" />
      </div>
    </div>
  )
}