import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ id, title, description, price, imageName, quantity, updateQuantity }) => {
    return (
        <div className="menu-item d-flex align-items-center">
            {/* Image Column */}
            <div className="col-4 d-flex align-items-center justify-content-center">
                <img src={`./images/${imageName}`} alt={title} className="img-fluid" />
            </div>

            {/* Food Detaisl */}
            <div className="col-8 food d-flex flex-column justify-content-between">
                {/* Food Name */}
                <div className="row gx-0">
                    <h5 className="food-name mb-0">{title}</h5>
                </div>

                {/* Food description */}
                <div className="row gx-0">
                    <p className="food-description mb-0">{description}</p>
                </div>

                {/* Food Price and Button */}
                <div className="row gx-0 align-items-center">
                    <div className="col-4">
                        <p className="food-price mb-0">${price.toFixed(2)}</p>
                    </div>
                    <div className="col-4"></div>
                    <div className="col-4 text-end">
                        <button 
                            className="btn btn-danger btn-sm" 
                            onClick={() => updateQuantity(id, price, -1)}
                            disabled={quantity === 0}
                        >-</button>
                        <span className="item-count mx-2">{quantity}</span>
                        <button
                            className="btn btn-success btn-sm"
                            onClick={() => updateQuantity(id, price, 1)}
                        >+</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
