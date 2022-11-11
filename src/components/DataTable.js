import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const DataTable = ({ astre }) => {
  const [data, setData] = useState([]);

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((res) => setData(res.data.bodies));
  }, []);

  return (
    <Card>
      <Card.Header as="h5">
        Featured<Button variant="primary">Go somewhere</Button>
      </Card.Header>
      <Card.Body>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>Nom</th>
              <th>Dimension</th>
              <th>Planète la plus proche</th>
              <th>Date de découverte</th>
              <th>Auteur de la découverte</th>
            </tr>
          </thead>
          <tbody>
            {data
              // .filter(
              //   (astre) =>
              //     astre.bodyType === selectedRadio || selectedRadio === ""
              // )
              .sort((a, b) => a.name - b.name)
              // .slice(0, rangeValue)
              .map((item, index) => (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{item.name}</td>
                  <td>{item.dimension}</td>
                  {/* <td>{item.aroundPlanet}</td> */}
                  <td>{item.discoveryDate}</td>
                  <td>{item.discoveredBy}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default DataTable;
