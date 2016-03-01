import React from "react";
import ReactDom from "react-dom";
import ChallengeData from "./ChallengeData.js"
import ChallengeApi from "./utils/ChallengeApi.js";

var RegexRocketsApp = require("./components/RegexRocketsApp.react");

ChallengeData.init();

ChallengeApi.getChallenges();

ReactDom.render(
    <RegexRocketsApp />,
    document.getElementById("app")
);