import React from "react";
import Table from "react-bootstrap/Table";

const DataTable = ({ rangeValue, selectedRadio, data }) => {
  console.log(data);
  return (
    <Table striped className="data-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Nom</th>
          <th>Dimension</th>
          <th id="pl-space">Planète la plus proche</th>
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
            <tr key={index}>
              <td>{index}</td>
              <td>{item.name}</td>
              <td>{item.dimension}</td>
              <td>
                {item.aroundPlanet !== null ? item.aroundPlanet.planet : ""}
              </td>
              <td>{item.discoveryDate}</td>
              <td>{item.discoveredBy}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
