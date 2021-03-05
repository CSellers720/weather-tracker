import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import styles from '../../styles/Navbar.module.css';

const MyNavbar = () => (
  <>
    <Navbar
      variant="dark"
      bg="darkblue"
      className={styles.navbar}
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
      <Button variant="track">Track</Button>
    </Navbar>
  </>
);

export default MyNavbar;
