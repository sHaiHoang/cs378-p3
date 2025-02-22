import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import './App.css';
import MenuItem from './components/MenuItem';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Furret Roasted Tea Latte',
    description: 'A creamy tea latte with roasted hazelnut flavors.',
    imageName: 'menu-item-1.jpg',
    price: 4.95,
  },
  {
    id: 2,
    title: 'Cheesy Rowlet Pizza',
    description: 'Wood-fired pizza with mozzarella and fresh basil.',
    imageName: 'menu-item-2.jpg',
    price: 9.25,
  },
  {
    id: 3,
    title: 'Fluffy Eevee Pancakes',
    description: 'Golden pancakes with maple syrup and whipped cream.',
    imageName: 'menu-item-3.jpg',
    price: 7.50,
  },
  {
    id: 4,
    title: 'Piquant Pikachu Curry',
    description: 'Spicy curry with yellow rice, carrots, and potatoes.',
    imageName: 'menu-item-4.jpg',
    price: 12.75,
  }
];


function App() {
  const [quantities, setQuantities] = useState({});
  const [subtotal, setSubtotal] = useState(0);

  // Update item quantity and subtotal
  const updateQuantity = (id, price, change) => {
    setQuantities(prev => {
      const newQuantity = Math.max(0, (prev[id] || 0) + change);
      const newQuantities = { ...prev, [id]: newQuantity };

      // Calc subtotal
      let newSubtotal = 0;
      menuItems.forEach(item => {
        newSubtotal += (newQuantities[item.id] || 0) * item.price;
      });

      setSubtotal(newSubtotal);
      return newQuantities;
    });
  };

  // Order button
  const handleOrder = () => {
    const orderedItems = menuItems
      .map(item => {
        const count = quantities[item.id] || 0;
        return count > 0 ? `${count} ${item.title}` : "";
      })
      .filter(item => item !== "")
      .join(" ");
    
    if (orderedItems.length === 0) {
      alert("No items selected!");
    } else {
      alert(`Order placed!\n${orderedItems}`);
    }
  };

  // Clear button
  const handleClearButton = () => {
    setQuantities({});
    setSubtotal(0);
  };

  return (
    <div className="app-container">
      {/* Title */}
      <div className="row">
        <div className="col text-center">
          <div className="d-flex align-items-center justify-content-center title-container">
            <img src="./images/logo.png" alt="Eevee Icon Logo" className="title-image" />
            <h1 className="quicksand-in-title">The Eevee Café</h1>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      <div className="row">
        <div className="col text-center">
          <p className="playwrite-in-subtitle">Rekindle Your Inner Child with Every Dish</p>
          <p className="subtitle-2 mb-0">Where Nostalgia Meets Flavor!</p>
        </div>
      </div>

      {/* Menu */}
      <div className="row menu">
        {menuItems.map(item => (
          <div key={item.id} className="col-md-6 col-lg-4">
            <MenuItem 
              id ={item.id}
              title={item.title}
              description={item.description}
              price={item.price}
              imageName={item.imageName}
              quantity={quantities[item.id] || 0}
              updateQuantity={updateQuantity}
            />
          </div>
        ))}
      </div>

      {/* Subtotal bar */}
      <div className="subtotal-bar">
        <p className="subtotal-text">Subtotal: ${subtotal.toFixed(2)}</p>
        <div className="subtotal-buttons">
          <button className="btn btn-primary order-btn" onClick={handleOrder}>Order</button>
          <button className="btn btn-secondary clear-btn" onClick={handleClearButton}>Clear All</button>
        </div>
      </div>
    </div>
  );
}

export default App;
