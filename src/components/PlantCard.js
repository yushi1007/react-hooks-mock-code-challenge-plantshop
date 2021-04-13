import React, { useState } from "react";

function PlantCard({ plant, onDelete, updatePrice }) {

  const {id, name, image, price } = plant
  const [soldOut, setSoldOut ] = useState(false)
  const [newPrice, setNewPrice] = useState("")

  const handleStockClick = () => {
    setSoldOut(soldOut => !soldOut)
  }

  const handleDelete = () => {
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "DELETE",
    })
      .then((r) => r.json())
      .then(() => {
        onDelete(plant);
      });
}
  const handleChange = (event) => {
      setNewPrice(parseFloat(event.target.value))
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    fetch(`http://localhost:6001/plants/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        price: newPrice
      })
    })
    .then(r => r.json())
    .then(updatePrice)
    setNewPrice("")
  }
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {!soldOut ? (
        <button onClick={handleStockClick} className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
      <form onSubmit={handleSubmit}>
          <input type="number" name="price" step="0.01" placeholder="New Price" value={newPrice} onChange={handleChange} />
          <button type="submit">Update Price</button>
      </form>
      <button onClick={handleDelete} className="emoji-button delete">🗑</button>
    </li>
  );
}

export default PlantCard;
