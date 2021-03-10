import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import MyModal from './MyModal';
import LocAlert from './LocAlert';

const MyNavbar = () => {
  const [show, setShow] = useState(false);
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);
  const [locAlert, setLocAlert] = useState(false);
  const showLocAlert = () => setLocAlert(true);
  const hideLocAlert = () => setLocAlert(false);
  const [address, setAddress] = useState({});
  const [coords, setCoords] = useState({ lon: null, lat: null });

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
      <MyModal
        show={show}
        onHide={hideModal}
        showLocAlert={showLocAlert}
        setAddress={setAddress}
        setCoords={setCoords}
      />
      <LocAlert
        show={locAlert}
        onHide={hideLocAlert}
        address={address}
        coords={coords}
      />
    </>
  );
};

export default MyNavbar;
