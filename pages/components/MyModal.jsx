import Modal from 'react-bootstrap/Modal';
import MyForm from './MyForm';
import styles from '../../styles/Modal.module.css';

const MyModal = ({ show, onHide }) => (
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
      <MyForm hideModal={onHide} />
    </Modal.Body>
  </Modal>
);

export default MyModal;
