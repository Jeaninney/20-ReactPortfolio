import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Row from "../components/Row";
import portfolio from "../portfolio.json";
// import About from "./pages/About";

class Portfolio extends Component {
state = {
    portfolio
};

componentDidMount() {
    this.ListeningStateChangedEvent({ portfolio });
}

render() {

    return (
      <Wrapper>
          <Title children="My Portfolio" />
          <Row>
            {this.state.portfolio.map(entry => 
            <PortfolioCard
              id={entry.id}
              key={entry.id}
              name={entry.name}
              image={entry.image}
              assignment={entry.assignment}
              url={entry.url}
              />
          )}
          </Row>
      </Wrapper>
    );
  }
}

  export default Portfolio;