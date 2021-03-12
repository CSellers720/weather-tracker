import styles from '../../styles/TableView.module.css';

const Blurb = () => (
  <div className={styles.blurb}>
    <h5>Temperature data is in Celsius</h5>
    <div>
      This table will show you the 10 most recent tracking events.
    </div>
    <div>
      Click a field to update values. (Incomplete)
    </div>
  </div>
);

export default Blurb;
