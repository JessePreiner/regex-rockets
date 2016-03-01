var React = require('react');
var ChallengeActions = require('../actions/ChallengeAction')
var ChallengeStore = require('../stores/ChallengeStore');


var ChallengeItem = require('./ChallengeItem.react')

var ChallengeItemList = React.createClass({

    render() {
        let rows = this.props.challenges ? this.props.challenges.map(function(x,y) {
            return <ChallengeItem key={y} level={x.level} text={x.text} />
        }) : [];

        return (
            <div>
                {rows}
            </div>
        )
    }
});

module.exports = ChallengeItemList;