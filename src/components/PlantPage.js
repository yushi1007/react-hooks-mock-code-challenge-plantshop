import React, { useEffect, useState } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const API = "http://localhost:6001/plants"
function PlantPage() {

  const [plants, setPlants] = useState([])
  const [searchName, setSearchName] = useState("")

  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(plants => {
      // console.log(plants)
      setPlants(plants)
    })
  }, [])

  const handleForm = (newPlant) => {
    setPlants([...plants, newPlant])
}

const handleDeletePlant = (plantToDelete) => {
  const updatedPlant = plants.filter((plant) => plant.id !== plantToDelete.id);
  setPlants(updatedPlant);
}

const handleUpdatePlant = (updatePlant) => {
  const updatePlants = plants.map((p) => {
    if(p.id === updatePlant.id){
      return updatePlant
    }
    else {
      return p
    }
  })
  setPlants(updatePlants)
}

const filteredName = plants.filter((p) => {
  return p.name.toLowerCase().includes(searchName.toLowerCase());
});

  return (
    <main>
      <NewPlantForm onAddPlant={handleForm}/>
      <Search searchName={searchName} onSearch={setSearchName}/>
      <PlantList plants={filteredName} updatePrice={handleUpdatePlant} onDelete={handleDeletePlant}/>
    </main>
  );
}

export default PlantPage;
