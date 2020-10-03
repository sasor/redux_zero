import { BUY_POKEMON, RETURN_POKEMON } from "./types";

export const buy_pokemon_action = (quantity) => {
    return {
        type: BUY_POKEMON,
        payload: quantity
    };
}

export const return_pokemon_action = (quantity) => {
    return {
        type: RETURN_POKEMON,
        payload: quantity
    };
}