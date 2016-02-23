import React from "react";
import ReactDom from "react-dom";

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


class Round extends React.Component {
    getInitialState() {
        let currentChallenge = undefined

    }

    render() {
        <div>
            <h1>Round started</h1>
        </div>
    }
}

var App = React.createClass({
    getInitialState: function() {
        return {
            initialChallenges: [],
            completed: false,
            currLevel: 0,
            highScore: 0
        }
    },
    componentDidMount() {
        this.serverRequest = $.getJSON(this.props.challengeSource, function(result) {
            this.setState({
                initialChallenges: result
            });
        }.bind(this))
    },

    render() {
        return (
            <div>
                <h1></h1>
                <Entry labelText="Enter Regex" id="entryField" inputType="text"/>
                <br />
                <ChallengeList challenges={this.state.initialChallenges}/>
                <Round></Round>
            </div>
        )
    }
});

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
        this.props.challenges.forEach(function(x, y) {
            rows.push(<ChallengeListRow key={y} level={x.level} text={x.text} />)
        });
        return (
            <div>
                {rows}
            </div>
            )
    }
});

const app = document.getElementById("app")

ReactDom.render(<App challengeSource='/challenges' />, app);
