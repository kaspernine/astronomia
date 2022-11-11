import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "./DataTable";

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
          max="250"
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

      <div className="table-content">
        {selectedRadio && (
          <button onClick={() => setSelectedRadio("")}>
            Annuler la sélection
          </button>
        )}
        <DataTable />
      </div>
    </div>
  );
};

export default Astres;
