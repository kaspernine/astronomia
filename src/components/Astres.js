import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Astres = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedRadio, setSelectedRadio] = useState("");
  const [rangeValue, setRangeValue] = useState(36);

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((res) => setData(res.data.bodies));
  }, []);

  useEffect(() => {
    let tempCat = [];
    data.map((item) =>
      !tempCat.includes(item.bodyType) ? tempCat.push(item.bodyType) : null
    );
    setCategories(tempCat);
  }, [data]);

  return (
    <div className="astres">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max={data.length}
          defaultValue={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        {categories.map((cat) => (
          <li>
            <input
              type="radio"
              id={cat}
              name="categroyRadio"
              checked={cat === selectedRadio}
              onChange={(e) => setSelectedRadio(e.target.id)}
            />
            <label htmlFor={cat}>{cat}</label>
          </li>
        ))}
      </ul>
      <Card>
        {selectedRadio && (
          <Card.Header as="h5">
            <div className="card-header-content">
              <div className="header-text">
                <p>{selectedRadio}</p>
              </div>
              <div className="radio-button">
                <Button variant="primary" onClick={() => setSelectedRadio("")}>
                  Annuler la sélection
                </Button>
              </div>
            </div>
          </Card.Header>
        )}
        <Card.Body>
          <DataTable
            rangeValue={rangeValue}
            selectedRadio={selectedRadio}
            data={data}
            setData={setData}
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Astres;
