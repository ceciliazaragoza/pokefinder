export default function Info({ name, data }) {
    return !data || !name ? (
      <p></p>
    ) : !data?.sprites || !data?.moves ? (
      <p>No data for {name}</p>
    ) : (
      <div>
        <h2>Meet {name}</h2>
        <img src={data.sprites.front_shiny} alt="Pokémon info" />
        <ul>
          {data.moves.map((move, index) => (
            <li key={index}>{move.move.name}</li>
          ))}
        </ul>
      </div>
    );
  }
  