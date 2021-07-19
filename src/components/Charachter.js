import React from "react";
import "../components/Charachter.css"
import CharachterItem from "../components/CharachterItem"
import Spinner from "./Spinner"

const Character= ({data,isLoading}) => {
   return (

isLoading ? (<Spinner />)   :  (<section className="character">
     {data.map(item => {
        return ( <div>
         <CharachterItem key={item.char_id} item={item} />
         </div>)
     })}
 </section>)
   )
 

}

export default Character;