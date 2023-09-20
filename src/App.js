import { useEffect, useState } from "react";
import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";

import './App.css';

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const pokemon = encodeURIComponent(name.toLowerCase());
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
    console.log(url);
    fetch(url)
      .then((r) => r.json())
      .then((r) => setData(r))
      .catch((e) => setData(e));
  }, [name]);

  return (<div className="App">
    <Title text="Poké Finder" />
    <Entry action={setName} />
    <Info name={name} data={data} />
  </div>);
}

export default App;
