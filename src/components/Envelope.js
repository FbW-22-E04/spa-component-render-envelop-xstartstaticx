import React from "react";
import Stamp from "../images/stamp.jpeg";
import "../components/Envelope.css";

function Envelope(props) {
  return (
    <div className="container">
      <div className="header-top">
        <div>
          <p>{props.sender}</p>
          {props.sendAdd}
        </div>
        <div className="img-container">
          <img src={Stamp} alt="" />
        </div>
      </div>
      <div className="bottom-container">
        <div>
          <p>{props.receiver}</p>
          {props.recAdd}
        </div>
      </div>
    </div>
  );
}

export default Envelope;
