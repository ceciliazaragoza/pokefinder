import "./info.css"
export default function Info({ name, data }) {
    const actualName = data?.name
    return !data || !actualName ? (
      <p></p>
    ) : !data?.sprites || !data?.moves ? (
      <p>No data for {actualName}</p>
    ) : (
      <div>
        <h2 className="pokemonName">Meet {actualName}</h2>
        <img src={data.sprites.front_shiny} alt="Pokémon info" />
        <h3>Abilities</h3>
        <ul>
          {data.abilities.map((ability, index) => (
            <li key={index}>{ability.ability.name}</li>
          ))}
        </ul>

        <h3>Moves</h3>
        <ul>
          {data.moves.map((move, index) => (
            <li key={index}>{move.move.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  