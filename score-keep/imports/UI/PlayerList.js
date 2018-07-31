import React, { Component } from 'react';
import ProppTypes from 'prop-types';
import FlipMove from 'react-flip-move';

import Player from './Player';
// import Players from '../api/players';

class PlayerList extends Component {
    arrRenderHandler = (arr) => {
        return arr.map((item) => {
            return <Player
                key={item._id}
                name={item.name}
                score={item.score}
                id={item._id}
                // position={item.position}
                // rank={item.rank}
                 />;
        });
    };

    render () {
        // let players = Players.find().fetch();
        const renderList = this.props.list.length ? this.arrRenderHandler(this.props.list)
        : (
            <div>
                <p className="item__message">Add your first player!</p>
            </div>
        );

        return (
            <div>
                <FlipMove maintainContainerHeight={true}>
                    {renderList}
                </FlipMove>                                            
            </div>
        );
    }
}

PlayerList.ProppTypes = {
    list: ProppTypes.array.isRequired,
};

export default PlayerList;