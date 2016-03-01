var AppDispatcher = require('../dispatchers/AppDispatcher');
var ChallengeConstants = require('../constants/ChallengeConstants');


var ChallengeActions = {

    receiveChallenges: function(data) {
        AppDispatcher.handleAction({
            actionType: ChallengeConstants.RECEIVE_CHALLENGES,
            data: data
        });
    },

    updateText: function(id, text) {
        AppDispatcher.handleAction({
            actionType: ChallengeConstants.UPDATE_CHALLENGE_TEXT,
            id: id,
            text: text
        });
    },

    attemptResolve: function(text) {
        var attempt = text.trim();
        if (attempt !== '') {
            AppDispatcher.handleAction({
                actionType: ChallengeConstants.ATTEMPT_RESOLVE,
                text: attempt
            })
        }
    },

    resolveChallenge: function(challenge) {
        var id = challenge.id;
        AppDispatcher.handleAction({
            actionType: ChallengeConstants.RESOLVE_CHALLENGE
        });
    },

    destroy: function(id) {
        AppDispatcher.handleAction({
            actionType: ChallengeConstants.DESTROY_CHALLENGE,
            id: id
        });
    },

    resetAll: function() {
        AppDispatcher.handleAction({
            actionType: ChallengeConstants.RESET_ALL_CHALLENGES
        });
    }
};

module.exports = ChallengeActions;