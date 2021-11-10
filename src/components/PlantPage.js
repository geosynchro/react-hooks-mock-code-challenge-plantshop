import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(setPlants)
  }, [])

  const plantsToDisplay = plants

  return (
    <main>
      <NewPlantForm />
      <Search />
      <PlantList plants={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
