const { createStore, combineReducers } = require("redux");

// Actions TYPES
// games_reducers
const BUY_POKEMON = 'BUY_POKEMON';
const RETURN_POKEMON = 'RETURN_POKEMON';

// consoles_reducers
const BUY_SWITCH_CONSOLE = 'BUY_SWITCH_CONSOLE';
const RETURN_SWITCH_CONSOLE = 'RETURN_SWITCH_CONSOLE';

// Actions
const buy_pokemon_action = quantity => {
    return {
        type: BUY_POKEMON,
        payload: quantity
    }
}
const return_pokemon_action = quantity => {
    return {
        type: RETURN_POKEMON,
        payload: quantity
    }
}

const buy_switch_action = quantity => {
    return {
        type: BUY_SWITCH_CONSOLE,
        payload: quantity
    }
}
const return_switch_action = quantity => {
    return {
        type: RETURN_SWITCH_CONSOLE,
        payload: quantity
    }
}

// Reducers
const default_games_state = {
    pokemon: 10,
    digimon: 10
};

const games_reducer = (state = default_games_state, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon - action.payload
            };
        }
        case RETURN_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            };
        }
        default: return state;
    }
}

const default_consoles_state = {
    ps5: 30,
    switch: 20
};

const consoles_reducer = (state = default_consoles_state, action) => {
    switch (action.type) {
        case BUY_SWITCH_CONSOLE: {
            return {
                ...state,
                switch: state.switch - action.payload
            };
        }
        case RETURN_SWITCH_CONSOLE: {
            return {
                ...state,
                switch: state.switch + action.payload
            };
        }
        default: return state;
    }
}

// Como se tiene mas de un reducer, usamos los sgte

const reducers = combineReducers({
    games_reducer,
    consoles_reducer
})

// Store
const store = createStore(reducers);


console.log('Estado inicial: ', store.getState());
store.subscribe(_ => console.log('Cambio de estado: ', store.getState())); // listener que escucha cuando cambia de estado
// store.dispatch(buy_pokemon_action(3)); // ejecutando el action de comprar pokemon
// store.dispatch(return_pokemon_action(2)); // ejecutando el action de retornar es decir devolver lo comprado

store.dispatch(buy_switch_action(10)); // ejecutando el action de comprar pokemon