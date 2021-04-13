import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plants, onDelete, updatePrice }) {
  const plantCard = plants.map((plant) => (
    <PlantCard 
    key={plant.id}
    plant={plant}
    onDelete={onDelete}
    updatePrice={updatePrice}
    />
  ))
  return (
    <ul className="cards">{plantCard}</ul>
  );
}

export default PlantList;
