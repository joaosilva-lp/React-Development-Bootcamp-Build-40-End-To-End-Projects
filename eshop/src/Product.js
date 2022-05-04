import React from "react";
import "./Product.css";
import { Link } from 'react-router-dom';

function Product({id, title, price, rating, image}){
    return(
        <div>
            <div className="product">
                <div className="product_info">
                    <p>{title}</p>
                    <p className="product_price">
                        <small>$</small><strong>{price}</strong></p>
                    <div className="product_rating">
                    {Array(rating)
                    .fill()
                    .map((_,i)=>(
                        <p>★</p>
                    ))}
                    </div>
                </div>
                
                <img src={image} alt="" />

                <button>Add to Basket</button>

            </div>
        </div>
    );
}

export default Product;