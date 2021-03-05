import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import styles from '../../styles/Navbar.module.css';

const MyNavbar = () => (
  <>
    <Navbar
      variant="dark"
      bg="dark"
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
          <Nav.Link href="">Table View</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Chart View</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="">Track</Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  </>
);

export default MyNavbar;
