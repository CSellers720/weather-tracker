import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import styles from '../styles/TableView.module.css';

const ChartView = () => {
  return (
    <Container fluid className={styles.container}>
      <h1>This is the chart view</h1>
    </Container>
  );
};

export default ChartView;
