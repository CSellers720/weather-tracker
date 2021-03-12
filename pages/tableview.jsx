import axios from 'axios';
import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import Blurb from '../components/tableview/Blurb';
import Headers from '../components/tableview/Headers';
import Row from '../components/tableview/Row';
import styles from '../styles/TableView.module.css';

const TableView = () => {
  const [tableData, setTableData] = useState();

  useEffect(async () => {
    await axios.get('/api/db-access')
      .then((results) => {
        setTableData(results.data.data);
      });
  }, []);

  if (tableData) {
    return (
      <Container fluid className={styles.container}>
        <Blurb />
        <Table
          variant="weather"
          size="sm"
          striped
          bordered
        >
          <Headers />
          <tbody>
            {tableData.map((data) => (
              <Row rowData={data} key={data.time} />
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
  return (
    <Container fluid className={styles.container}>
      <h1>Loading...</h1>
    </Container>
  );
};

export default TableView;
