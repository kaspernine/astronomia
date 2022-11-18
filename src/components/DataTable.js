import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import AstreDetail from "./AstreDetail";

const DataTable = ({ rangeValue, selectedRadio, data }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [selectedRow, setSelectedRow] = useState("");

  console.log(data);

  const showData = item => {
    setSelectedRow(item.id);
    handleShow();
  }

  // const showPlentDetails = item.aroundPlanet => {
  //   setSelectedRow(item.aroundPlanet.planet);
  //   handleShow();
  // }

  return (
    <Table striped className="data-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Dimension</th>
          {(!selectedRadio || selectedRadio === "Moon") && (
            <th>Planète la plus proche</th>
          )}
          <th>Date de découverte</th>
          <th>Auteur de la découverte</th>
        </tr>
      </thead>
      <tbody>
        {data
          .filter(
            (astre) => astre.bodyType === selectedRadio || selectedRadio === ""
          )
          .sort((a, b) => a.name - b.name)
          .slice(0, rangeValue)
          .map((item, index) => (
            <tr
              key={index}
              onClick={() => {
                showData(item)
              }}
            >
              <td>{index}</td>
              <td>{item.name === '' ? 'inconnu' : item.name}</td>
              <td>{item.dimension === '' ? 'inconnue' : item.dimension}</td>
              {(!selectedRadio || item.bodyType === "Moon") && (
                <td onClick={() => showData(item)}>
                  {item.aroundPlanet !== null ? item.aroundPlanet.planet : ""}
                </td>
              )}
              <td>{item.discoveryDate === '' ? 'inconnue' : item.discoveryDate}</td>
              <td>{item.discoveredBy === '' ? 'inconnu' : item.discoveredBy}</td>
            </tr>
          ))}
      </tbody>
      <AstreDetail
        show={show}
        setShow={setShow}
        data={data}
        selectedRow={selectedRow}
      />
    </Table>
  );
};

export default DataTable;
