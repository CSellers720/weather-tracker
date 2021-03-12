/* eslint-disable no-underscore-dangle */
/* eslint-disable no-alert */
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import styles from '../../styles/Modal.module.css';

const LocAlert = ({
  show, onHide, address, coords: { lon, lat },
}) => {
  const { city, state, country } = address;

  const onConfirm = async () => {
    await axios.post('/api/fetch-data', { city, state, country })
      .then(async (data) => {
        const { doc } = data.data;
        const postObj = { id: doc._id, coord: doc.coord };
        await axios.post('/api/hourly', postObj);
        onHide();
        window.location.reload();
      });
  };

  return (
    <Modal
      show={show}
      onHide={onHide}
      className={styles.custom_modal}
      size="lg"
      centered
    >
      <Modal.Header>
        <Modal.Title>
          Is this the correct location?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3>{`City - ${address.city}`}</h3>
        {address.state
          && <h3>{`State/Region - ${address.state}`}</h3>}
        <h3>{`Country - ${address.country}`}</h3>
        <br />
        <br />
        <h3>
          Longitude:
          {`   ${lon}`}
        </h3>
        <h3>
          Latitude:
          {`   ${lat}`}
        </h3>
        <br />
        <br />
        <Button variant="form" onClick={onConfirm}>Confirm</Button>
        <Button
          variant="cancel"
          onClick={onHide}
          className={styles.cancel}
        >
          Cancel
        </Button>
      </Modal.Body>
    </Modal>
  );
};

export default LocAlert;
