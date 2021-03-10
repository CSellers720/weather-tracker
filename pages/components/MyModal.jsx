import Modal from 'react-bootstrap/Modal';
import MyForm from './MyForm';
import styles from '../../styles/Modal.module.css';

const MyModal = ({
  show, onHide, showLocAlert, locAlert, setAddress, setCoords,
}) => (
  <Modal
    className={styles.custom_modal}
    show={show}
    onHide={onHide}
    size="lg"
    centered
  >
    <Modal.Header className={styles.header}>
      <Modal.Title>Track Local Weather</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <MyForm
        hideModal={onHide}
        showLocAlert={showLocAlert}
        locAlert={locAlert}
        setAddress={setAddress}
        setCoords={setCoords}
      />
    </Modal.Body>
  </Modal>
);

export default MyModal;
