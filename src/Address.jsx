import React from "react";
import StampImage from "./images/stamp.jpeg";
import "./address.css";

const Address = () => {
  const sender = [
    <li key={1}>Mr. Sender</li>,
    <li key={2}>123 Fake St.</li>,
    <li key={3}>Boston, MA 02118</li>,
  ];

  const receiver = [
    <li key={4}>Mrs. Receiver</li>,
    <li key={5}>123 Fake St.</li>,
    <li key={6}>San Francisco, CA 94101</li>,
  ];

  return (
    <div className="main-container">
      <div className="envelope-top-container">
        <ul>{sender}</ul>
        <img src={StampImage} alt="" />
      </div>
      <div className="envelope-bottom-container">
        <ul>{receiver}</ul>
      </div>
    </div>
  );
};

export default Address;
