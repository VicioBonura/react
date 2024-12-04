import NameCard from "../NameCard/NameCard";
import { PokemonResult } from "../../hooks/usePokeApi";

const List = ({pokemon}: {pokemon: PokemonResult[]}) => {
    return <div className="pokemon--container">
        {pokemon.map((p, i) => {
            return <NameCard key={i} name={p.name} />
        })}
    </div>
}

export default List;