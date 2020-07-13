import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Title from "../components/Title";
// import Card from "../components/Card";

function About() {
  return (
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="xs-12 sm-3 md-4 lg-4 xl-4">
          <img alt="Jeaninne MacDonnell" src="images/Jeaninne.jpg" className="img-fluid" />
          </Col>
          <Col size="xs-12 sm-9 md-8 lg=8 xl=8">
            <Title>About Me!</Title>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p className="indenttext">
                Welcome to my little space on the web. My name is Jeaninne. I currently work for a healthcare company in Washington, DC as an Information Security and Access Control Analyst.
								<br /> <br />
								I decided to take the GW Full Stack Web Development Coding Bootcamp because I've always had an interest in coding and I enjoy being creative. In the past, I've built 
								elaborate tools inside of Microsoft Excel using macros and Visual Studio. I've always wanted to take those projects to the next level and build them for the web. This
								course has given me the tools to be able to do that.
								<br /> <br />
								I've learned so much in the 6-month course. I can can now confidently code in HTML, CSS, and Javascript, jQuery and React. I can create and manipulate data in MySQL
								as well as Mongo databases. I enjoy playing with styling and layouts in the front-end as well as working with data with APIs and databases in the back-end.
								<br /> <br />
								But most importantly, I love bringing my ideas to life. Please check out my Portfolio page to see some of the cool things I've built.
								</p>
          </Col>
        </Row>
      </Container>
    
  );
}

export default About;