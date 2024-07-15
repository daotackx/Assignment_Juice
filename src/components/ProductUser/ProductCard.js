import React from 'react';
import './ProductCard.css';
const ProductCard = ({ product }) => {
    const { name, price, image } = product;

    return (
        <div className="card">
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">Price: ${price}</p>
                <a href="#" className="btn btn-primary">Details</a>
            </div>
        </div>
    );
}

export default ProductCard;
