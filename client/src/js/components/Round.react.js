var React = require('react');
var ChallengeActions = require('../actions/ChallengeAction')
var ChallengeStore = require('../stores/ChallengeStore');

var Round = React.createClass({
    getInitialState: function() {
        return {
            inputValue: ''
        }
    },

    render() {
        return (
            <div>
                <h2>Current Challenge: {this.props.currentChallenge}</h2>
                <input
                    value={this.state.inputValue}
                    id={this.props.id}
                    type={this.props.inputType}
                    onChange={this.onChange}/>
                <label for={this.props.id}>{this.props.labelText}</label>
                <button onClick={this.attemptResolve}></button>
            </div>
        )
    },

    attemptResolve() {
        ChallengeActions.attemptResolve(this.state.inputValue)
    },

    onChange(e) {
        let currentGuess = e.target.value;
        this.setState({inputValue: currentGuess});
        console.log(currentGuess);
    }
});

module.exports = Round;