var ChallengeActions = require('../actions/ChallengeAction')

module.exports = {
    getChallenges: function () {
        var data = JSON.parse(localStorage.getItem('challenges'));
        ChallengeActions.receiveChallenges(data);
    }
}