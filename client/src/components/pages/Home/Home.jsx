import React from "react";
import { useContext } from "react";
import { dataContext } from "../../../contexts/dataContext";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
export default function Home() {
  const { products } = useContext(dataContext);
  console.log(products);

  return( products.map((item) => (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={item.img} />
        <Card.Body>
          <Card.Title>Name Product :{item.nameProduct}</Card.Title>
          <Card.Text>{item.price}</Card.Text>
          <Card.Text>{item.length}</Card.Text>
          <Card.Text>{item.height}</Card.Text>
          <Card.Text>{item.depth}</Card.Text>
          <Card.Text>{item.category.map(item=>item.nameCategory)}</Card.Text>
          <Card.Text>{item.category.map(item=>item.nameCategory)}</Card.Text>


          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  )));
}
