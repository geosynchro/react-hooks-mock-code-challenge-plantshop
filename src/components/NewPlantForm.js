import React, {useState} from "react";

function NewPlantForm(onAddPlant) {
  //set State/defualt values
  const [formData, setFormData]= useState({
    name: "",
    image: "",
    price: ""
  })
  
  function handleFormSubmit(){
    //make  post request here
    const newPlant = {
      name: formData.name,
      image: formData.image,
      price: formData.price
    }

    const config = {
      method: "POST",
      headers:{
        "Content-type": "application/json"
      },
      body: JSON.stringify(newPlant)
    }
    fetch("http://localhost:6001/plants", config)
    .then(res => res.json())
    .then(onAddPlant)
  }

  function handleOnChange(e){
    //target input values and set state
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (

    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleFormSubmit}>
        <input 
          type="text" 
          name="name" 
          placeholder="Plant name"
          value={formData.name}
          onChange={handleOnChange} 
        />
        <input 
          type="text" 
          name="image" 
          placeholder="Image URL" 
          value={formData.image}
          onChange={handleOnChange} 
        />
        <input 
          type="number" 
          name="price" step="0.01" 
          placeholder="Price" 
          value={formData.price}
          onChange={handleOnChange} 
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
