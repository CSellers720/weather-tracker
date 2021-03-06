import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import MyModal from './MyModal';

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  return (
    <>
      <Navbar
        variant="dark"
        bg="darkblue"
        fixed="top"
      >
        <Navbar.Brand href="/">
          Weather Tracking
        </Navbar.Brand>
        <Nav>
          <Nav.Item>
            <Nav.Link href="/">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/tableview">Table View</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/chartview">Chart View</Nav.Link>
          </Nav.Item>
        </Nav>
        <Button variant="track" onClick={showModal}>Track</Button>
      </Navbar>
      <MyModal show={show} onHide={hideModal} />
    </>
  );
};

export default MyNavbar;
