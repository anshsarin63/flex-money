require("dotenv").config();
const express = require('express');
const mongoose = require("mongoose");
const { check, validationResult } = require('express-validator');
const mysql = require('mysql2');

const app = express();
var cors = require('cors')

const User=require('./model/users');
const Payment=require('./model/payments');

app.use(express.json());
app.use(cors()) 



// Set up a connection to the database

//database-mongoDB
mongoose.set('strictQuery', true);
mongoose.connect(
  process.env.MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const connection = mongoose.connection;
connection
  .once("open", () => {
    console.log("Database connected");
  })
  .on('error',(err) => {
    console.log("Connection failed");
  });



app.post('/api/payment', [
  // Validate the form data
  check('name')
    .notEmpty()
    .withMessage('Name is required'),
  check('age')
    .isInt({min:18,max:65})
    .withMessage('Given Age is not allowed'),
  check('email')
    .isEmail()
    .withMessage('Invalid email address'),
  check('slot')
    .notEmpty()
    .withMessage('Choose a slot'),
  check('cardNumber')
    .isCreditCard()
    .withMessage('Invalid card number'),
  check('expirationDate')
    .matches(/^\d{2}\/\d{2}$/)
    .withMessage('Invalid expiration date'),
  check('cvv')
    .isLength({ min: 3, max: 3 })
    .withMessage('Invalid CVV')
], (req, res) => {
  const errors = validationResult(req);
  // If there are validation errors, return them to the client
  if (!errors.isEmpty()) {
    return res.json({ errors: errors.array() });
  }
  // Insert the user and payment data into the database
  const userData= new User( {
    name:req.body.name,
    email:req.body.email,
    age:req.body.age
  });
  userData.save().then(result=>{
    const paymentData = new Payment({
      cardNumber:req.body.cardNumber,
      slot:req.body.slot,
      expirationDate:req.body.expirationDate,
      cvv:req.body.cvv
    });
    paymentData.save().then(r=>{
      const paymentResponse = true || CompletePayment(req.body);
      if (paymentResponse) {
          // If the payment is successful, return a success message to the client
          return res.status(200).json({ message: 'Payment successful' });
      } else {
          // If the payment fails, return an error message to the client
          return res.status(400).json({ message: paymentResponse.error });
      }
    }).catch(err=>{
      return res.sendStatus(500);
    });
    
  }).catch(err=>{
    return res.sendStatus(500);
  });
  
});

app.listen(process.env.PORT || 8000);