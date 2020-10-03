import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buy_pokemon_action, return_pokemon_action } from '../redux/actions';

class Buy extends Component {

    render() {

        console.log(this.props);
        const POKEMONS_A_COMPRAR = 10
        const POKEMONS_A_DEVOLVER = 5

        return (
            <div>
                <button onClick={_ => this.props.buyAction(POKEMONS_A_COMPRAR)}>comprar pokemons</button>
                <button onClick={_ => this.props.returnAction(POKEMONS_A_DEVOLVER)}>devolver pokemons</button>
            </div>
        );
    }

}

const mapDispatchToProps = {
    buyAction: buy_pokemon_action,
    returnAction: return_pokemon_action
}

export default connect(null, mapDispatchToProps)(Buy);