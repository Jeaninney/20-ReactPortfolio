import React from "react";
import "./style.css";
import Col from "../Col";
function PortfolioCard(props) {
  return (
    <Col size="md-4">
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Assignment:</strong> {props.assignment}
          </li>
          <li>
            <strong>URL:</strong> {props.url}
          </li>
        </ul>
      </div>
    </div>
   </Col>
    
  );
}
export default PortfolioCard;