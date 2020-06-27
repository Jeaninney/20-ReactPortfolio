import React from "react";
import "./style.css";
import Col from "../Col";
function PortfolioCard(props) {
  return (
    <Col size="xs-12 sm-6 md-4 lg-4 xl-6">
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
            <strong>URL:</strong><a className="underLine" href={props.url}>{props.url}</a>
          </li>
        </ul>
      </div>
    </div>
   </Col>
    
  );
}
export default PortfolioCard;