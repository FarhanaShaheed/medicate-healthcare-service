import React from 'react';
import { Col, Container, Card } from 'react-bootstrap';

const Product = ({product}) => {
    const{img, name, id, description, price} = product;
    return (
        <div>
            <Container>
            <div>
           <Col>
     <Card>
       <Card.Img variant="top" src={img} style={{height:'20rem'}}  fluid/>
       <Card.Body>
         <Card.Title>{name}</Card.Title>
         <Card.Text>
           {description.slice(0,150)}
         </Card.Text>
         <Card.Title>Price:$ {price}</Card.Title>
         </Card.Body>
     </Card>
   </Col>
       </div>
        </Container>
        </div>
    );
};

export default Product;