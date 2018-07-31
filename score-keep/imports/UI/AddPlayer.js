import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { Players } from '../api/players';

class addPlayer extends Component {

    submitHandler = (e) => {
        let value = e.target.playerName.value;
    
        e.preventDefault();
    
        if (value) {
            e.target.playerName.value = '';
            Players.insert({
                name: value,
                score: 0,
            });
        }
    }
    render () {
        return (
            <div className="item">
                <form className="form" onSubmit={this.submitHandler}>
                    <input className="form__input" type="text" name="playerName" placeholder="Player name" />
                    <button className="button">Add player</button>
                </form>
            </div>

        );
    }

};

addPlayer.PropTypes = {
    submit: PropTypes.func.isRequired,
};

export default addPlayer;