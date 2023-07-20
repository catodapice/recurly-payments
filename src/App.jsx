import React from "react";
import { render } from "react-dom";
import { Elements } from "@recurly/react-recurly";

function App() {
  const recurlyTest = () => {
    const handleClick = () => {
      window.recurly.configure("ewr1-q6rMPJ6ob6ZUZyffxfyevh");
      const paypal = window.recurly.PayPal({
        display: {
          displayName: "Test",
          description: "This is difficult",
        },
      });
      alert(JSON.stringify(paypal));
      paypal.on("error", (error) => {
        alert(JSON.stringify(error));
        console.log(error, "error");
      });
      paypal.on("token", (token) => {
        alert(JSON.stringify(token));
        console.log(token, "token");
        const urlWithToken = `/payer_id=${token.payer_id}?id=${token.id}`;
        window.location = `fabfitfunApp://fff/${urlWithToken}`;
        alert(JSON.stringify(window.location));
        console.log(window.location, "window.location");
      });
      paypal.start();
      return;
    };

    return (
      <div style={{ width: "1000px", height: "1000px" }}>
        <button onClick={handleClick}>Test Payapl</button>
      </div>
    );
  };

  return (
    <div>
      <h1>react-recurly demo v5</h1>
      <Elements>{recurlyTest()}</Elements>
    </div>
  );
}
export default App;
