import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    this.state.data;
    return (
      <div className="App">
        <h1>Critter Census</h1>
        <img
          src="data:image/jpeg;base64,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"
          alt="Squirrels of USF - This is the emoji for both “squirrel” and “chipmunk.” We  have a problem. #squirrel | Facebook"
        />
        <div className="grid">
          <div id="squirrels" className="cell">
            Facts about squirrels
          </div>
          <div id="squirrels" className="cell">
            squirrels affect on environment
          </div>
          <div id="chipmunks" className="cell">
            facts about chipmunks
          </div>
          <div class="cell" id="chipmunk">
            chipmunks affect on environment
          </div>
          <div class="cell" id="critter">
            find critters
          </div>
        </div>
      </div>
    );
  }
}

export default App;
