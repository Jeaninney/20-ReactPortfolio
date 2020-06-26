import React from "react";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
// import Card from "../components/Card";

function About() {
  return (
      <Container style={{ marginTop: 30 }}>
        <Row>
          <Col size="xs-6 sm-6 md-6 lg=8 xl=8">
            <h1>About Me!</h1>
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
          <p>
                Welcome to my webpage for Homework 2. There's no useful information here. I'm just rambling to fill space. 
                I was pretty busy this week, and spent a significant time without access to Wi-Fi. So, there are a lot fo things I wanted to try, but just ran out of time.
                I'm hoping this effort will be enough.
            </p>
            <p>
                This is another paragraph. Again, no real content. Just text as filler. 
                I'm aware that I could use the Lorem Ipsum, but rambling here is just more fun. And who knows, you might actually read it.
            </p>
            <p>
                Well, if you've gotten this far, I may as well say a little about myself. This is the About Me page after all.
                I like travelling and going on vacations. Who doesn't? I guess some people don't like travelling. Some people prefer to just stay home
                My husband enjoys travelling too and ever since he's come into my life, I've been to so many more places than I once thought I'd see.
            </p>
            <p>
                This is another paragraph. We're both from Michigan. I honestly never thought I'd live outside of Michigan. 
                But I moved to the DC area because my husband got an awesome job here. I, however, got an acceptable job. 
                I like it well enough. My favorite parts are when I'm able to be creative and improve processes. I took this 
                class because I think I can use a lot of the skills I will learn here to improve the processes in my current job. Amongst other things.
            </p>
          </Col>
        </Row>
      </Container>
    
  );
}

export default About;