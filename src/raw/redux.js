const { createStore } = require("redux");

// Actions TYPES
const BUY_POKEMON = 'BUY_POKEMON';

// Actions
const buy_pokemon_action = (quantity) => {
    return {
        type: BUY_POKEMON,
        payload: quantity
    }
}
// Reducers
const default_games_state = {
    pokemon: 10
};

const games_reducer = (state = default_games_state, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            };
        }
        default: return state;
    }
}

// Store
const store = createStore(games_reducer);
console.log('Estado inicial: ', store.getState());
store.subscribe(_ => console.log('Cambio de estado: ', store.getState())); // listener que escucha cuando cambia de estado
store.dispatch(buy_pokemon_action(3)); // ejecutando el action de comprar pokemon