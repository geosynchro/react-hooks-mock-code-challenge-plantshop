import React, {useState} from "react";

function PlantCard({name, image, price}) {
  const [stock, setStock]= useState(true)

  const handleStock= () => {
    setStock((prevStock)=> !prevStock)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      <button onClick={handleStock} className={stock? "primary": ""}>{stock? "In Stock": "Out of Stock"}</button>
    </li>
  );
}

export default PlantCard;
