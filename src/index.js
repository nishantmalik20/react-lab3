import React from "react";
import ReactDOM from "react-dom";

import Greeting from "components/Greeting";
import Header from "components/Header";
import Footer from "components/Footer";
import Product from "components/Product";
import Product from "components/ProductList";

import 'css/index.css';

const App = () => {
    const arrayProduct = [
        {id:1, name: 'Shoe NMD', price: 300 },
        {id:2, name: 'Shoe NMD', price: 200 },
        {id:3, name: 'Shoe NMD', price: 100 },
        {id:4, name: 'Shoe NMD', price: 900 },
        {id:5, name: 'Shoe NMD', price: 90 }
    ]
	return(
        <>
            <Header />
            <ProductList data={arrayProduct} />
            <Footer />
        </>
        )
}

ReactDOM.render(<App />, document.getElementById('root'));

