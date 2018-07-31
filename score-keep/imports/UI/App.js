import React, { Component } from 'react';
import ProppTypes from 'prop-types';

import TitleBar from './TitleBar';
import AddPlayer from './AddPlayer';
import PlayerList from './PlayerList';

class App extends Component {
    render () {
        return (
            <div>
                <TitleBar title="Score Keep!" subtitle="Created by Rustam Laykulov" />
                <div className="wrapper">
                    <PlayerList list={this.props.newList} />
                    <AddPlayer />
                </div>
                
            </div>
        );
    }
};

PlayerList.ProppTypes = {
    newList: ProppTypes.array.isRequired,
};

export default App;