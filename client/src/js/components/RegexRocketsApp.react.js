import React from "react";
import ReactDom from "react-dom";

var Round = require('./Round.react');

var ChallengeList = require('./ChallengeList.react');
var ChallengeStore = require('../stores/ChallengeStore');
var ChallengeData = require('../ChallengeData');
var ChallengeActions = require('../actions/ChallengeAction')


// get initial state
function getChallengesState() {
    return {
        challenges: ChallengeStore.getAll(),
        currentChallenge: ChallengeStore.getCurrent()
    }
}


var RegexRocketsApp = React.createClass({
    getInitialState: function() {
        return getChallengesState();
    },

    componentDidMount: function() {
        ChallengeStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function() {
        ChallengeStore.removeChangeListener(this._onChange);
    },

    componentWillRender: function() {
    },

    render() {
        return (
            <div>
                <Round currentChallenge={this.state.currentChallenge.text}></Round>
                <br />
                <ChallengeList challenges={this.state.challenges} />

            </div>
        )
    },

    _onChange: function() {
        this.setState(getChallengesState());
    }

});

module.exports = RegexRocketsApp;
