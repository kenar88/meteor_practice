import React, {Component} from 'react';

import PropTypes from 'prop-types';
import { Players } from '../api/players';


class Player extends Component {
    render () {
        return (
            <div className="item">
                <div className="player">
                    <div>
                        <h3 className="player__name">
                            {this.props.name}
                        </h3>
                        <p className="player__stats">
                            {this.props.score} score(s)
                        </p> 
                    </div>
                    <div className="player__actions">
                        <button className="button button--round" onClick={() => Players.update(this.props.id, {$inc:{score: 1}})}>+1</button>
                        <button className="button button--round" onClick={() => Players.update(this.props.id, {$inc:{score: -1}})}>-1</button>
                        <button className="button button--round" onClick={() => Players.remove(this.props.id)}>X</button>
                    </div>
                </div>            
            </div>
        );
    }
};

Player.PropTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    score: PropTypes.number,
};

export default Player;