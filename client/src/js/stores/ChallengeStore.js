var AppDispatcher = require('../dispatchers/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var ChallengeConstants = require('../constants/ChallengeConstants');
var assign = require('object-assign');

var CHANGE_EVENT = 'change';

var _challenges = {};

function loadChallenges(data) {
    _challenges = data;
}

function update(id, updates) {
    _challenges[id] = assign({}, _challenges[id], updates);
}

function updateAll(updates) {
    for (var id in _challenges) {
        update(id, updates);
    }
}

function destroy(id) {
    delete _challenges[id];
}

function attemptResolve(id, text) {
    let solved =  _challenges[id] === text;
    console.log(solved);
    return solved;
};

var ChallengeStore = assign({}, EventEmitter.prototype, {
    getAll: function () {
        return _challenges;
    },
    getCurrent: function() {
        return _challenges.shift();
    },
    emitChange: function () {
        this.emit(CHANGE_EVENT)
    },
    addChangeListener: function (cb) {
        this.on(CHANGE_EVENT, cb);
    },
    removeChangeListener: function (cb) {
        this.removeListener(CHANGE_EVENT, cb);
    }
});




AppDispatcher.register(function (payload) {
    var action = payload.action;
    var challengeText;

    switch(action.actionType) {

        case ChallengeConstants.RECEIVE_CHALLENGES:
            loadChallenges(action.data);
            break;

        case ChallengeConstants.RESOLVE_CHALLENGE:
            update(action.id, {resolved: true});
            break;

        case ChallengeConstants.ATTEMPT_RESOLVE:
            attemptResolve(action.id, action.text);
            break;
        case ChallengeConstants.UPDATE_CHALLENGE_TEXT:
            challengeText = action.text.trim();
            if (challengeText !== '') {
                update(action.id, {text:challengeText});
            }
            break;

        case ChallengeConstants.RESET_ALL_CHALLENGES:
            updateAll({resolved: false});
            break;

        case ChallengeConstants.DESTROY_CHALLENGE:
            destroy(action.id);
            break;

        // emit change in any case
        default:
            return true;
    }

    ChallengeStore.emitChange();
    return true;
});

module.exports = ChallengeStore;
