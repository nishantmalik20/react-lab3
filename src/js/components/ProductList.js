import React from "react";
import Product from "components/Product";

const ProductList = ({data}) => {

    const productArray = data.map(Element =><Product key={Element.id} name={Element.name} price={Element.price} /> ) 


	return  (
			<>
                
                    <section class="row section-product__row">
                        {productArray}
                    </section>
                

            </>
		)
}

export default ProductList;
