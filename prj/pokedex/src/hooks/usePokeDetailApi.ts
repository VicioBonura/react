import { useState, useEffect } from "react"
import { pokemonDetailApi } from "../services/pokeApi";

/**
 * la separazione delle due tipologie di risposta permette di astrarre la logica
 * di frontend mantenendola invariata anche se l'API dovesse cambiare. Per implementare
 * questa separazione è necessario mappare la risposta dell'API alla struttura di
 * risposta del frontend
 */
const mapPokemonDetailToClient = (pokemonApiRes: PokemonDetailResponse): PokemonDetailResult => {
    return {
        name: pokemonApiRes.name,
        weight: pokemonApiRes.weight,
        mainImageUrl: pokemonApiRes.sprites.front_default
    };
}

const usePokeDetailApi = (name?: string) => {
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailResult>();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        pokemonDetailApi(name)
            .then((data: PokemonDetailResponse) => {
                setPokemonDetail(mapPokemonDetailToClient(data));
            })
            .catch(() => {
                console.log("Error fetching pokemon detail");
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [name]);

    return { pokemonDetail, isLoading };
}

export default usePokeDetailApi;