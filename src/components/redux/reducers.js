import { BUY_POKEMON, RETURN_POKEMON } from "./types";

const initial_state = {
    pokemon: 30
}

export const reducer = (state = initial_state, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return {
                pokemon: state.pokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            return {
                pokemon: state.pokemon + action.payload
            }
        }
        default: return state;
    }
}