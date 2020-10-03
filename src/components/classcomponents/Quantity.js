import React, { Component } from 'react';
import { connect } from 'react-redux';

class Quantity extends Component {

    render() {
        return (
            <div>
                cantidad pokemons disponible {this.props.state.pokemon}
            </div>
        );
    }

}

const mapStateToProps = (state) => {
    return { state }
}

export default connect(mapStateToProps)(Quantity);