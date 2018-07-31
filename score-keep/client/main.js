import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import numeral from 'numeral';

import { Players } from '../imports/api/players';
import App from '../imports/UI/App';

Meteor.startup(() => {
    Tracker.autorun(() => {
        let players = Players.find({}, { sort: { score: -1 } }).fetch();
        let positionedPlayers = players.map((player, index) => {
            // let rank = 1;

            // if (index !== 0 && players[index - 1].score > player.score) {
            //     rank++;
            // }

            return {
                ...player,
                rank: index + 1,                
                // position: numeral(rank).format('0o'),
            };
        });
    ReactDom.render(<App newList={positionedPlayers} />, document.getElementById('app'));
    });    
});

