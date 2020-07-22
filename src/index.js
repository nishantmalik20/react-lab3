import React from "react";
import ReactDOM from "react-dom";

import Greeting from "components/Greeting";
import Header from "components/Header";
import Footer from "components/Footer";
import Product from "components/Product";

import 'css/index.css';

const App = () => {
	return(
        <>
            <Header />
            <Footer />
            <Product />
            <Greeting name="World" />
        </>
        )
}

ReactDOM.render(<App />, document.getElementById('root'));
