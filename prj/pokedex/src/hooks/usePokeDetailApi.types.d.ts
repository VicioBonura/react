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