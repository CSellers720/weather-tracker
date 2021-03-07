import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import styles from '../../styles/Modal.module.css';

const LocAlert = ({ show, onHide, address }) => (
  <Modal
    show={show}
    onHide={onHide}
    className={styles.custom_modal}
    size="lg"
    centered
  >
    <Modal.Header>
      <Modal.Title>
        Is this the correct address?
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <h2>{address}</h2>
      <br />
      <br />
      <Button variant="form">Confirm</Button>
      <Button
        variant="form"
        onClick={onHide}
        className={styles.cancel}
      >
        Try Again
      </Button>
    </Modal.Body>
  </Modal>
);

export default LocAlert;
