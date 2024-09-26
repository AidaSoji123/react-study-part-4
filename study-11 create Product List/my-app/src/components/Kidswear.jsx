import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { KidsData } from './KidsData';
import { useState } from 'react';

function Kidswear() {

  const [items,setItems] =useState(KidsData);
  const [count,setCount] =useState(1)

  const handleCount=()=>{
      setCount(count+1)
  }

  const handleCount2=()=>{
      setCount(count-1)
  }
  return (
    <div>

    {items.map((item) => (
      <div  className='d-inline-flex' key={item.id}>
      <Card style={{ width: '30rem' }}>
      <Card.Img variant="top"style={{height:'20rem'}} className='p-2' src={item.image} />

      <Card.Body>
        <Card.Title>{item.name}</Card.Title>
        <Card.Text>
         {item.description}
        </Card.Text>
        <Card.Text>
         <h>Price: </h>{item.price}
        </Card.Text>
        <Card.Text>
        <h>Qty: </h>
          <Button className="bg-dark" onClick={handleCount2}>-</Button>
         {count}
          <Button className="bg-dark" onClick={handleCount}>+</Button>
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    </div>
    ))}

   </div>
  );
}

export default Kidswear;




