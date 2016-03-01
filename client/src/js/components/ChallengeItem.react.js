var React = require('react');
var ChallengeActions = require('../actions/ChallengeAction')

var ChallengeItem = React.createClass({

    render: function() {
        return (
            <div>
                <span class="challengeLevel">{this.props.level}</span>
                <span class="challengeListItem" id={this.props.id}>{this.props.text}</span>
            </div>
        )
    }
});

module.exports = ChallengeItem;