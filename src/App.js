import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import HundreedDayChallenge1 from "./components/HundreedDayChallenge1/HundreedDayChallenge1";
import HundreedDayChallenge2 from "./components/HundreedDayChallenge2/HundreedDayChallenge2";
import HundreedDayChallenge3 from "./components/HundreedDayChallenge3/HundreedDayChallenge3";
import HundreedDayChallenge4 from "./components/HundreedDayChallenge4/HundreedDayChallenge4";
import HundreedDaysChallengeHome from "./components/HundreedDaysChallengeHome/HundreedDaysChallengeHome";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/hundreeddayCSS/challenge1">
          <HundreedDayChallenge1 />
        </Route>
        <Route path="/hundreeddayCSS/challenge2">
          <HundreedDayChallenge2 />
        </Route>
        <Route path="/hundreeddayCSS/challenge3">
          <HundreedDayChallenge3 />
        </Route>
        <Route path="/hundreeddayCSS/challenge4">
          <HundreedDayChallenge4 />
        </Route>
        <Route path="/hundreeddayCSS">
          <HundreedDaysChallengeHome />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
