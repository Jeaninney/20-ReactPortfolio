import React, { Component } from "react";
import PortfolioCard from "../components/PortfolioCard";
import Wrapper from "../components/Wrapper";
import Title from "../components/Title";
import Row from "../components/Row";
import portfolio from "../portfolio.json";

class Portfolio extends Component {
state = {
    portfolio
};

componentDidMount() {
    this.setState({ portfolio });
}

render() {
    return (
      <Wrapper>
          <Title children="My wonderful works of art" />
          <Row>
            {this.state.portfolio.map(entry => 
            <PortfolioCard
              id={entry.id}
              key={entry.id}
              name={entry.name}
              image={entry.image}
							assignment={entry.assignment}
							description={entry.description}
              url={entry.url}
              />
          )}
          </Row>
      </Wrapper>
    );
  }
}

  export default Portfolio;