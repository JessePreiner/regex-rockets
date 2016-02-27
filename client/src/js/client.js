import React from "react";
import ReactDom from "react-dom";



var App = React.createClass({
    getInitialState: function() {
        return {
            completed: false,
            currLevel: 0,
            highScore: 0
        }
    },

    render() {
        return (
            <div>
                <Round currentChallenge={this.props.challenges.shift()}></Round>
                <Entry labelText="Enter Regex" id="entryField" inputType="text"/>
                <br />
                <ChallengeList challenges={this.props.challenges}/>
            </div>
        )
    }
});

var Round = React.createClass({

    render: function () {

        return (
        <div>
            <h1>Round started</h1>
            <h2>Current Challenge: {this.props.currentChallenge.text}</h2>
            
        </div>
        )
    }
})

var Entry = React.createClass({
    render() {
        return (
            <div>
                <input id={this.props.id} type={this.props.inputType} />
                <label for={this.props.id}>{this.props.labelText}</label>
            </div>
            )
    }
});

var ChallengeList = React.createClass({
    render() {
        let rows = [];
        rows = this.props.challenges.map(function(x,y) {
            return <ChallengeListRow key={y} level={x.level} text={x.text} />
        });

        return (
            <div>
                {rows}
            </div>
            )
    }
});


class ChallengeListRow extends React.Component{
    render() {
        return (
            <div>
                <span class="challengeLevel">{this.props.level}</span>
                <span class="challengeListItem" id={this.props.id}>{this.props.text}</span>
            </div>
        )
    }
}

const app = document.getElementById("app")

let serverResponse = $.getJSON('/challenges', function(result) {
    ReactDom.render(<App challenges={result} />, app);
})


