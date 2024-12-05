import { useParams, useNavigate } from "react-router";
import usePokeDetailApi from "../hooks/usePokeDetailApi";
import DetailCard from "../components/DetailCard/DetailCard";
import { useEffect } from "react";

const Detail = () => {
    const {name} = useParams();
    const {pokemonDetail, isLoading} = usePokeDetailApi(name);
    const navigate = useNavigate();

    useEffect(() => {
        if(!pokemonDetail && !isLoading) {
            console.log("Pokemon not found");
            navigate("/");
        }
    }, [pokemonDetail, isLoading, navigate]);

    if(!pokemonDetail) return null;

    return <>
            <DetailCard 
                name={pokemonDetail.name} 
                weight={pokemonDetail.weight}
                mainImageUrl={pokemonDetail.mainImageUrl}
            />
            <button onClick={() => navigate("/")}>Back</button>
        </>
}

export default Detail;