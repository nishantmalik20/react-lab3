import React from "react";

const Product = ({name , price , image}) => {


    const sayHello = (event) => {
        alert(`${name} has been added to your cart.😍`)
    }
    return (
        <>
         <div class="product-grid">
                        <img src={image} alt="product" />
                        <p className="product-name">{name}</p>
                        <p className="product-price">CAD${price} </p>
                        <button className="button cart" onClick={sayHello}>Add to cart</button>

                    </div>


        </>
    )
}

export default Product;
