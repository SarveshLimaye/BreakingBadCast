import React from "react"
import "../components/CharachterItem.css"
const CharachterItem = ({item}) => {
    return (
        <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={item.img} alt="Avatar" className="image-style" />
    </div>
    <div class="flip-card-back">
      <h2>{item.name}</h2>
      <strong>Nickname : </strong> {item.nickname} <br />
      <strong>Actor : </strong>{item.portrayed} <br />
      <strong>Status : </strong>{item.status}
    </div>
  </div>
</div>
    )
}

export default CharachterItem;
