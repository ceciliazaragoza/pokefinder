const getPokemon = async (idOrName) => {
  const pokemon = encodeURIComponent(idOrName.toLowerCase());
  const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
  console.log(url);
  // old code:
  // fetch(url)
  //     .then((response) => {
  //         console.log("GOT RESPONSE!!!")
  //         return response.json()
  //     })
  //     .then((json) => {
  //         setData(json)
  //         console.log("GOT JSON!!")
  //     })
  //     .catch((e) => setData(e));
  // console.log("FETCH DONE!!!!");
  // we know that fetch is asynchronous, so put await

  const response = await fetch(url);
  console.log("GOT RESPONSE!!!");
  const json = await response.json();
  console.log("GOT JSON!!");
  return json;
  // console.log("Something went wrong");
};

const getNasa = async (query, keywords) => {
  const queryParameter = encodeURIComponent(query);
  const keywordsParameter = encodeURIComponent(keywords);
  const url = `https://images-api.nasa.gov?q=${query}&keywords=${keywords}`;

  const response = await fetch(url);
  return await response.json();
};

export { getPokemon, getNasa };
