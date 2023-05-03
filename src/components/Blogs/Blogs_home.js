import React from "react";
import { Link } from 'react-router-dom';
import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Blogs_home = () => {
    return (
        <>
      <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Articles </strong>
        </h1>
      </Container>
      </Container>
      <Card>
      <Card.Header>useEffect in React</Card.Header>
      <Card.Body>
        <Card.Text>
          <span className="purple">useEffect</span> in React is a function in React which allows us to perform side effects in our components.
        </Card.Text>
        <Link to="/blogs/useEffect">
            <Button variant="primary">Read</Button>
        </Link>
      </Card.Body>
    </Card>
      </>
    )
}

export default Blogs_home;