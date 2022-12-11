import React, { useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const PaymentForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    slot: '',
    cardNumber: '',
    expirationDate: '',
    cvv: ''
  });

  const resetToDefault = () =>{
    setFormData({
      name: '',
      age: '',
      email: '',
      slot: '',
      cardNumber: '',
      expirationDate: '',
      cvv: ''
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    // Make a POST request to the REST API to process the payment
    const PORT=process.env.PORT || 8000;
    axios.post(`http://localhost:${PORT}/api/payment`, formData)
      .then(response => {
        // Display the payment response to the user
        if(!response.data.message){
          alert(response.data.errors[0].msg);
        }
        else{
          resetToDefault();
          alert(response.data.message);
        }
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
  }

  return (
    <form onSubmit={handleSubmit} >
      <Form.Group className="mb-3" >
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name='name' placeholder="Enter Name" value={formData.name} onChange={handleChange}/> 
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control type="text" name='age' placeholder="Enter Age" value={formData.age} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email Id</Form.Label>
          <Form.Control type="email" name='email' placeholder="Enter Email Id" value={formData.email}  onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3">
          <Form.Label>Slots Available</Form.Label>
          <Form.Select aria-label="Default select example" name='slot' value={formData.slot}  onChange={handleChange}>
          <option >Choose Your Slot</option>
          <option value="1">6-7AM</option>
          <option value="2">7-8AM</option>
          <option value="3">8-9AM</option>
          <option value="3">5-6PM</option>
        </Form.Select>
      </Form.Group>
      
      <Form.Group className="mb-3" >
          <Form.Label>Card Number</Form.Label>
          <Form.Control type="text" name='cardNumber' placeholder="Enter Card Number" value={formData.cardNumber} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" >
          <Form.Label>Expiration date</Form.Label>
          <Form.Control type="text" name='expirationDate' placeholder="Enter Expiration date" value={formData.expirationDate} onChange={handleChange}/>
      </Form.Group>
      <Form.Group className="mb-3" >
          <Form.Label>CVV</Form.Label>
          <Form.Control type="text" name='cvv' placeholder="Enter CVV" value={formData.cvv} onChange={handleChange}/>
      </Form.Group>
      <Button variant="primary" type="submit">
          Submit For Payment
        </Button>
    </form>
  );
}

export default PaymentForm;



