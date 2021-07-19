
import React,{useState} from "react";
import "../components/Search.css"
const Search = ({getQuery}) => {
    const [text,setText]=useState('')
   
    const onChange = (q) => {
        setText(q)
        getQuery(q)
    }
   
   return (
        <div className="search">
        <form>
            <input placeholder="search"
                type="text"
                value={text}
                className="search-box"
                onChange = { (e) => { onChange(e.target.value)}}
            />
        </form>
    </div>
   )
}

export default Search