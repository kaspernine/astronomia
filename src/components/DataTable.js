import React, { useState } from "react";
import Table from "react-bootstrap/Table";
// import Button from "react-bootstrap/Button";
// import Modal from "react-bootstrap/Modal";
import AstreDetail from "./AstreDetail";

const DataTable = ({ rangeValue, selectedRadio, data }) => {
  const [show, setShow] = useState(false);
  const handleShow = () => setShow(true);

  const [selectedRow, setSelectedRow] = useState("");

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
          //.filter((item) => item.aroundPlanet !== null)
          .filter(
            (astre) => astre.bodyType === selectedRadio || selectedRadio === ""
          )
          .sort((a, b) => a.name - b.name)
          .slice(0, rangeValue)
          .map((item, index) => (
            <tr
              key={index}
              onClick={() => {
                setSelectedRow(item.id);
                handleShow();
              }}
            >
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.dimension}</td>
              {item.bodyType === "Moon" && (
                <td>
                  {item.aroundPlanet !== null ? item.aroundPlanet.planet : ""}
                </td>
              )}
              <td>{item.discoveryDate}</td>
              <td>{item.discoveredBy}</td>
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
