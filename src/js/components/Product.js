import React from "react";
import imageProduct from "";

const Product = ({ name, price }) => {


    const sayHello = (event) => {
        alert(`${name} has been added to your cart`)
    }
    return (
        <>

            <div class="container-product">

                <div class="product-grid">
                    <img src={imageProduct} alt="product" />
                    <button class="button cart" onClick={sayHello}>Add to cart</button>
                    <p></p>
                    <p>CAD$ </p>
                </div>

            </div>
        </>
    )
}

export default Product;
