import React,{useState,useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Header from "./components/Header"
import Search from "./components/Search"
import Character from './components/Charachter';

function App() {
  const [data,setData]=useState([])
  const [isLoading,setisLoading]=useState(true);
  const [query,setQuery]=useState('')
  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios (`https://www.breakingbadapi.com/api/characters?name=${query}`)
      console.log(result.data);
      setisLoading(false)
      setData(result.data)
    }
    fetchItems()
  },[query])

  return(
    
    <div>
      <Header />
      <Search getQuery={ (q) => {setQuery (q)}} /> 
      <Character data={data} isLoading={isLoading}/>
    </div>
  )
}

export default App;
