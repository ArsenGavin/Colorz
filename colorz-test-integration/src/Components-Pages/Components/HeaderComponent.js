import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import '../../Styles/Header.css';

function HeaderComponent({ toggleModal }) {
  return (
    <Navbar bg="light" className="header" data-bs-theme="light">
      <Container>
        <Navbar.Brand href="#home" className="brand__header">
          Vision.R
        </Navbar.Brand>
        <Nav className="me-auto title__group__header">
          <Nav.Link
            className="title__header"
            onClick={(e) => {
              e.preventDefault();
              toggleModal();
            }}
            href="#home"
          >
            Low Solution
          </Nav.Link>
          <Nav.Link
            className="title__header"
            onClick={(e) => {
              e.preventDefault();
              toggleModal();
            }}
            href="#home"
          >
            Low Technology
          </Nav.Link>
          <Nav.Link
            className="title__header"
            onClick={(e) => {
              e.preventDefault();
              toggleModal();
            }}
            href="#home"
          >
            High Price
          </Nav.Link>
          <Button
            variant="danger"
            onClick={(e) => {
              e.preventDefault();
              toggleModal();
            }}
            className="button__header"
          >
            Buy it
          </Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default HeaderComponent;
