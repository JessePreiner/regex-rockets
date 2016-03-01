module.exports = {
    init: function() {
        localStorage.clear();

        var challenges = [
            //TODO Get from DB, use Challenge objects (not yet defined)
            {level:1, solved: false, percentComplete: 0, text: "hello, world"},
            {level:2, solved: false, percentComplete: 0, text:"h e l l o , w o r l d!"},
            {level:3, solved: false, percentComplete: 0, text:"meepmoop"},
            {level:4, solved: false, percentComplete: 0, text:"asdasdasd"},
            {level:5, solved: false, percentComplete: 0, text:"asdasdasfgfd"},
            {level:6, solved: false, percentComplete: 0, text:"asdafsgf"},
            {level:7, solved: false, percentComplete: 0, text:"srfgrfsg"},
            {level:8, solved: false, percentComplete: 0, text:"dfgdfgdfh"}
        ];
        localStorage.setItem('challenges', JSON.stringify(challenges));


        //let serverResult = $.getJSON('/challenges', function(result) {
        //    localStorage.setItem('challenges', JSON.stringify(result));
        //});
        //
        //return serverResult;
    }
}