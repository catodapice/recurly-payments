import React from "react";
import { CardElement } from "@recurly/react-recurly";

export function MyPaymentForm(props) {
  return (
    <form>
      <input type="text" data-recurly="first_name" placeholder="First name" />
      <input type="text" data-recurly="last_name" placeholder="Last name" />
      <CardElement />
    </form>
  );
}
