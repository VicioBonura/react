import { useState, useEffect } from "react"
import { pokemonListApi } from "../services/pokeApi";

const DEFAULT_MAX_RESULTS = 10

const usePokeApi = (maxResults = DEFAULT_MAX_RESULTS) => {
    const [pokemon, setPokemon] = useState<PokemonResult[]>([]);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [limit, setLimit] = useState(maxResults);
  
    useEffect(() => {
        pokemonListApi({maxResults: limit, page})
            .then(data => {
                setPokemon(data.results)
                setTotalPages(Math.ceil(data.count / limit))
            })
    }, [page, limit])
  
    const goToPrevPage = () => {
        if (page > 0) {
            setPage(page - 1)
        }
    }
  
    const goToNextPage = () => {
        if (page < totalPages - 1) {
            setPage(page + 1)
        }
    }

    const onLimitChange = (limit: number) => {
        setLimit(limit)
    }
  
    const hasNextPage = page < totalPages - 1 ? false : true
    const hasPreviousPage = page > 0 ? false : true

    return {pokemon, page, totalPages, hasNextPage, hasPreviousPage, goToPrevPage, goToNextPage, onLimitChange};
}

export default usePokeApi;
