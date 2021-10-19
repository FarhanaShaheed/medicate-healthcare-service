import React from 'react';
import { Col, Container, Card, Button } from 'react-bootstrap';
import './Product.css';

const Product = ({product}) => {
    const{img, name, description, price} = product;
    return (
        <div>
            <Container>
            <div>
           <Col>
     <Card id="products" className="product-card">
       <Card.Img className="card-img" variant="top" src={img} style={{height:'20rem', width:'20rem',marginLeft:'70px'}}  fluid/>
       <Card.Body className="product-body">
         <Card.Title>{name}</Card.Title>
         <Card.Text>
           {description.slice(0,150)}
         </Card.Text>
         <Card.Title>Price:$ {price}</Card.Title>
         <Button className="cart-button">Add to Cart</Button>
         </Card.Body>
     </Card>
   </Col>
       </div>
        </Container>
        </div>
    );
};

export default Product;