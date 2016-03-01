var React = require('react');

var Round = React.createClass({

    componentWillRender: function() {
        console.log(this.props);
    },
    render: function () {
        return (
            <div>
                <h1>Round started</h1>


            </div>
        )
    }
});

module.exports = Round;
