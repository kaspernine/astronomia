import React from "react";
import Table from "react-bootstrap/Table";
import AstreDetail from "./AstreDetail";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedRow, setShow } from "../feature/astres.slice";

const DataTable = () => {
  const dispatch = useDispatch();

  const selectedRadio = useSelector((state) => state.astres.select);
  const astresData = useSelector((state) => state.astres.astres);
  const rangeValue = useSelector((state) => state.astres.range);
  useSelector((state) => state.astres.showDetails);
  const handleShow = () => dispatch(setShow(true));
  useSelector((state) => state.astres.row);

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
        {astresData
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
                dispatch(setSelectedRow(item.id));
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
      <AstreDetail />
    </Table>
  );
};

export default DataTable;
