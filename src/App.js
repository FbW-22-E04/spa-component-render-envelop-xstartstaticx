import React from "react";
// import Address from "./Address";
import Envelope from "./components/Envelope";

export default function App() {
  const senderName = "Saad Malik";
  const receiverName = "Daniel Reiller";

  const senderAddress = (
    <>
      <p>123 Fake St.</p>
      <p>Boston, MA 02118</p>
    </>
  );

  const receiverAddress = (
    <>
      <p>123 Fake St.</p>
      <p>San Francisco, CA 94101</p>
    </>
  );

  return (
    <div>
      <Envelope
        sender={senderName}
        receiver={receiverName}
        sendAdd={senderAddress}
        recAdd={receiverAddress}
      />
      {/* <h1>My React App</h1> */}
      {/* <Address /> */}
    </div>
  );
}
