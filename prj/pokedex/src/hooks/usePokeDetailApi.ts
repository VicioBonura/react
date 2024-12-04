import { useState, useEffect } from "react"
import { pokemonDetailApi } from "../services/pokeApi";
//definizione del tipo di risposta preparata per il frontend
type PokemonDetailResult = {
    name: string;
    weight: number;
    mainImageUrl: string;
}

//definizione del tipo di risposta fornita dall'API
type PokemonDetailResponse = {
    name: string;
    weight: number;
    sprites: {
        front_default: string;
    }
}

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

const usePokeDetailApi = (name: string) => {
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailResult>();
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        pokemonDetailApi(name)
            .then((data: PokemonDetailResponse) => {
                setPokemonDetail(mapPokemonDetailToClient(data));
                setIsLoading(false);
            });
    }, [name]);

    return { pokemonDetail, isLoading };
}

export default usePokeDetailApi;