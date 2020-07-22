import React from "react";
import ReactDOM from "react-dom";


import Header from "components/Header";
import Footer from "components/Footer";
import Product from "components/Product";
import ProductList from "components/ProductList";

import 'css/index.css';

const App = () => {
    
	return(
        <>
            <Header />
            <ProductList />
            <Footer />
        </>
        )
}


export default App


