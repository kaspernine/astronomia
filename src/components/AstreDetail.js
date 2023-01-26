import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { setShow } from "../feature/astres.slice";

const AstreDetail = () => {
  const dispatch = useDispatch();

  const astresData = useSelector((state) => state.astres.astres);
  const selectedRow = useSelector((state) => state.astres.row);
  const show = useSelector((state) => state.astres.showDetails);
  const handleClose = () => dispatch(setShow(false));

  return (
    <div>
      {astresData
        .filter((title) => title.id === selectedRow)
        .map((item) => (
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>{item.name + " - informations"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ul>
                <b>
                  <li>
                    {item.density === 0
                      ? "Densité inconnue"
                      : "Densité : " + item.density}
                  </li>
                  <br />
                  <li>{"Gravité de surface : " + item.gravity}</li>
                  <br />
                  <li>{"Inclinaison : " + item.inclination + "°"}</li>
                  <br />
                  <li>
                    {item.meanRadius === 0
                      ? "Rayon moyen inconnu"
                      : "Rayon moyen : " + item.meanRadius + "km"}
                  </li>
                  <br />
                  <li>
                    {item.polarRadius === 0
                      ? "Rayon polaire inconnu"
                      : "Rayon polaire : " + item.polarRadius + "km"}
                  </li>
                  <br />
                  <li>
                    {item.vol === null
                      ? "Volume inconnu"
                      : "Volume : " + item.vol.volValue + "km³"}
                  </li>
                </b>
              </ul>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="primary" onClick={handleClose}>
                Fermer
              </Button>
            </Modal.Footer>
          </Modal>
        ))}
    </div>
  );
};

export default AstreDetail;
