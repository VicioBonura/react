import "./List.css";
import NameCard from "../NameCard/NameCard";
import { useNavigate } from "react-router";

const List = ({pokemon}: {pokemon: PokemonResult[]}) => {
    const navigate = useNavigate();
    return <div className="pokemon--container">
        {pokemon.map((p, i) => {
            return <NameCard key={i} name={p.name} mainImageUrl={p.mainImageUrl} onClick={() => navigate(`/${p.name}`)} />
        })}
    </div>
}

export default List;