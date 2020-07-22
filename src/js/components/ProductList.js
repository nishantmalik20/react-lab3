import React from "react";
import Product from "./Product";
import nmd from "../../img/1.jpg";
import pants from "../../img/2.jpeg";
import trefoil from "../../img/3.jpg";
import pink from "../../img/4.jpg";
import superstar from "../../img/5.jpg";

    const arrayProduct = [
        { id: 1, name: 'Adidas Burgandy NMD Shoes', price: 299 , image:nmd },
        { id: 2, name: 'Adidas Originals Women Open Pants', price: 149 , image : pants},
        { id: 3, name: 'Adidas Big Trefoil Hoodie', price: 99 , image : trefoil},
        { id: 4, name: 'Adidas Women Pink NMD Shoes', price: 399 , image : pink},
        { id: 5, name: 'Adidas Originals Superstar Shoes', price: 290 , image : superstar}
    ]
    const ProductList = () => {

        //const productArray = data.map(Element =><Product key={Element.id} name={Element.name} price={Element.price} /> ) 


        return (
            < >

                <h1 className="h1">Products</h1>
                <div className="container-product">
                    {arrayProduct.map((item) => <Product name={item.name} price={item.price} image={item.image} />)}
                </div>
            </>
        )
    }

    export default ProductList;
