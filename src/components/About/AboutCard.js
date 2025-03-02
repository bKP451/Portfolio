import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Pandey Bikash </span>
            from <span className="purple"> Lalitpur, Nepal.</span>
            <br />I am a software developer who usually programs in JavaScript.  I have done B.E in Computer Engineering from Paschimanchal Campus, Pokhara.
            <br />
            <br />
            Apart from programming computers, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football [Liverpool]
            </li>
            <li className="about-activity">
              <ImPointRight /> Literature
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I did not fall for a shooting star."{" "}
          </p>
          <footer className="blockquote-footer">Pandey</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
