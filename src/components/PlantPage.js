import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchPlants, setSearchPlants] = useState("")

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then(res => res.json())
    .then(setPlants)
  }, [])

  const plantsToDisplay = plants.filter((plant) => plant.name.toLowerCase().includes(searchPlants.toLocaleLowerCase()))

  function handleAddPlant(newPlant){
    setPlants([newPlant, ...plants ])
  }

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search searchPlants={searchPlants} setSearchPlants={setSearchPlants}/>
      <PlantList plants={plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;
