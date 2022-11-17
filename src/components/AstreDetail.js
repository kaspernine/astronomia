import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AstreDetail = ({ show, setShow, data, selectedRow }) => {
  const handleClose = () => setShow(false);

  return (
    <div>
      {data
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
