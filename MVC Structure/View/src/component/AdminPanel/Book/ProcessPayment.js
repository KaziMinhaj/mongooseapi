import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentCardForm from "./PaymentCardForm";

const stripePromise = loadStripe(
  "pk_test_51Ii1pxJGGMlPP6gSTPDOYGcanzedBB7KKW9GR0N63lWPc2EQist6M0809wQ3EDF7EloMUqPfGPvXnAGEoAbl4hl500sX9rP4Hz"
);

const ProcessPayment = ({ handlePayment }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentCardForm handlePayment={handlePayment}></PaymentCardForm>
    </Elements>
  );
};

export default ProcessPayment;
