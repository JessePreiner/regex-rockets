import React from "react";
import ReactDom from "react-dom";

// var CHALLENGES = [
//     //TODO Get from DB, use Challenge objects (not yet defined)
//     {level:1, text: "hello, world"},
//     {level:2, text:"h e l l o , w o r l d!"},
//     {level:3, text:"meepmoop"},
//     {level:4, text:"asdasdasd"},
//     {level:5, text:"asdasdasfgfd"},
//     {level:6, text:"asdafsgf"},
//     {level:7, text:"srfgrfsg"},
//     {level:8, text:"dfgdfgdfh"}
//     ]

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

class ChallengeList extends React.Component{
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
}

class Layout extends React.Component {
        constructor(props) {
            super(props);
            this.state = 
            {
                completed: false,
                currLevel: 0,
                highScore: 0
            }
    }
    
    render() {
        return (
            <div>
                <Entry labelText="Entry" id="entryField" inputType="text"/>
                <ChallengeList challenges={CHALLENGES}/>
            </div>
        )
    }
}

class Entry extends React.Component {
    render() {
        return (
            <div>
                <input id={this.props.id} type={this.props.inputType} />
                <label for={this.props.id}>{this.props.labelText}</label>
            </div>
            )
    }
}


const app = document.getElementById("app")

ReactDom.render(<Layout/>, app);