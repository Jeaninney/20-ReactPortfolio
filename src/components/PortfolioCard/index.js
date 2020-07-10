import React from "react";
import "./style.css";
import Col from "../Col";
function PortfolioCard(props) {
  return (
		<>
		<Col size="md-1"></Col>
    <Col size="md-10">
    <div className="card mb-3">
      <div className="row no-gutters img-container">
				<div className="col-md-4">
        <img className="card-img" alt={props.name} src={props.image} />
				</div>
      <div className="content col-md-8">
				<div class="card-body">
				<h5 class="card-title">
          <strong>Name:</strong> {props.name}
				</h5>
        <p className="card-text">
					<strong>Assignment:</strong> {props.assignment}
				</p>
				<p className="card-text">
					<strong>Description:</strong> {props.description}
				</p>
				<p className="card-text"></p>
            <strong>URL:</strong><a className="underLine" href={props.url}>{props.url}</a>
          
				</div>
				</div>
			</div>
    </div>
	 </Col>
	 <Col size="md-1"></Col>
	 </>
    
  );
}
export default PortfolioCard;

