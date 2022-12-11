const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  cardNumber: { type: String, required: true },
  slot: { type: String, required: true },
  expirationDate: { type: String, required: true },
  cvv: { type: String, required: true }
});


const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;