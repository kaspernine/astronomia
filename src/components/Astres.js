import axios from "axios";
import React, { useEffect } from "react";
import DataTable from "./DataTable";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import {
  setAstresData,
  setCategoriesData,
  setRangeValue,
  setSelectedRadio,
} from "../feature/astres.slice";

const Astres = () => {
  const dispatch = useDispatch();

  const astresData = useSelector((state) => state.astres.astres);
  const categories = useSelector((state) => state.astres.categories);
  const selectedRadio = useSelector((state) => state.astres.select);
  const rangeValue = useSelector((state) => state.astres.range);

  // Le useEffect se joue lorsque le composant est monté
  useEffect(() => {
    axios
      .get("https://api.le-systeme-solaire.net/rest/bodies/")
      .then((res) => dispatch(setAstresData(res.data.bodies)));
  }, [dispatch]);

  useEffect(() => {
    let tempCat = [];
    astresData.map((item) =>
      !tempCat.includes(item.bodyType) ? tempCat.push(item.bodyType) : null
    );
    dispatch(setCategoriesData(tempCat));
  }, [astresData, dispatch]);

  return (
    <div className="astres">
      <ul className="radio-container">
        <input
          type="range"
          min="1"
          max="250"
          defaultValue={rangeValue}
          onChange={(e) => dispatch(setRangeValue(e.target.value))}
        />
        {categories.map((cat) => (
          <li>
            <input
              type="radio"
              id={cat}
              name="categroyRadio"
              checked={cat === selectedRadio}
              onChange={() => dispatch(setSelectedRadio(cat))}
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
                <Button
                  variant="primary"
                  onClick={() => dispatch(setSelectedRadio(""))}
                >
                  Annuler la sélection
                </Button>
              </div>
            </div>
          </Card.Header>
        )}
        <Card.Body>
          <DataTable />
        </Card.Body>
      </Card>
    </div>
  );
};

export default Astres;
