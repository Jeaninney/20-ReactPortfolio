import React from "react";
import Container from "../../components/Container";
import "./style.css";

function About() {
	return (
<Container>
	<div className="contactinfo">
			<p>Jeaninne MacDonnell<br />
			586-298-1819<br />
			<a href="mailto:jmacdonn@protonmail.com">jmacdonn@protonmail.com</a> </p>
			<p>Linked In Profile: <a href="https://www.linkedin.com/in/jeaninne-macdonnell-101193b3" target="_blank" rel="noopener noreferrer">https://www.linkedin.com/in/jeaninne-macdonnell-101193b3</a></p>
			<p>Resume: <a href="/images/resume.pdf" target="_blank" rel="noopener noreferrer">Click here for my resume</a></p> 
			<p>Github link: <a href="https://www.github.com/Jeaninney" target="_blank" rel="noopener noreferrer">https://www.github.com/Jeaninney</a></p>

			<br /><br />
			Email is my preferred means of communication.
			</div>
 </Container>
	);
}

export default About;
