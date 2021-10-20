import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Product from '../Product/Product';
import 'animate.css';
import './Products.css';

const Products = () => {
    const[products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('./products.json')
        .then(res => res.json())
        .then(data => setProducts(data));
    }, [])
    return (
        <Container>
        <div  >
        <h2 className="mt-5 animate__animated animate__bounce">Our Products</h2>
            <p>You can order online and can buy physically also</p>
        <Row xs={1} md={2} className="g-4">
        {
            products.map(product => <Product
                key={product.id}
                product={product}
                ></Product>)
        }
       </Row>
    </div>
    </Container>
    );
};

export default Products;