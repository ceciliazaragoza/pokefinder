import { useEffect, useState } from "react";
import { parse } from "date-fns";

import Title from "./Title.js";
import Entry from "./Entry.js";
import Info from "./Info.js";
import { getPokemon, getNasa } from "./api.js";
import Subtitle from "./Subtitle.js";
import Loader from "./Loader.js";

import "./App.css";
import DateSelector from "./components/DateSelector.js";

function App() {
  const [name, setName] = useState("");
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [query, setQuery] = useState("");
  const [keywords, setKeywords] = useState("");

  const handleQueryChange = (event) => setQuery(event.target.value);
  const handleKeywordsChange = (event) => setKeywords(event.target.value);

  const fetchNasaData = async (query, keywords) => {
    try {
      const nasaData = await getNasa(query, keywords);
      console.log("got data!!!");
      console.log(nasaData);
      setLoading(false);
    } catch (error) {
      setError(error);
    }
  };
  const handleSearch = (event) => {
    fetchNasaData(query, keywords);
  };

  useEffect(() => {
    if (!name) {
      return;
    }

    async function fetchData() {
      try {
        const pokemon = await getPokemon(name);
        setData(pokemon);
        console.log("Fetch Done!!!");
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(error);
      }
    }

    setLoading(true);
    // make data disappear
    setData(null);
    setError(null);
    fetchData();
  }, [name]);

  // our goal with code

  // const date = parse("2004-04-23", "yyyy-MM-dd", new Date());
  const date = new Date();
  return (
    <div className="App">
      <Title text="Poké Finder" />
      <Subtitle text="A demo API web app" />
      {/* must make env variable start with process.env.REACT_APP to mkae a environment variable in react */}
      <h3>Demo Environment Variable: {process.env.REACT_APP_APIKEY}</h3>

      <Entry action={setName} />
      {/* if a condition is true, show something, then use && */}
      {/* if have if else statements, use ? and colons */}
      {loading && <Loader text="😄" />}
      <input value={query} onChange={handleQueryChange} />
      <input value={keywords} onChange={handleKeywordsChange} />
      <button onClick={handleSearch}>Search</button>
      {/* class name will always include query prompt, and if query is populated it will stay hidden,  if empty will be visible  */}
      <p
        className={`queryPrompt ${
          query ? "hiddenQueryPrompt" : "visibleQueryPrompt"
        }`}
      >
        Please supply a query
      </p>
      {/* {!query && <p>Please supply a query</p>} */}
      {error ? (
        <span>sorry something went wrong</span>
      ) : (
        <Info name={name} data={data} />
      )}

      <DateSelector currentDate={date} />
    </div>
  );
}

export default App;
