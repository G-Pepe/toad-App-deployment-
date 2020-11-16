import React, { Component } from "react";
import { AddToDo } from "./AddToDo";
//import { YetToDo } from "./YetToDo";
import "./app.css";
import Header from "./Header";
import { List } from "./List";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Help } from "./Help";

export default class App extends Component {
  state = {
    activities: [
      /* {id: 1 , text: "yoga", color: "",  status: false} */
    ],
  };

  addActivity = (newActivity) => {
    this.setState({
      activities: [...this.state.activities, newActivity],
    });
  };

  deleteItem = () => {
    let updatedData = this.state.activities.filter(
      (item) => item.status !== true
    );
    this.setState({
      activities: updatedData,
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />

          <Switch>
            <Route exact path="/">
              <AddToDo addActivity={this.addActivity} />

              <ul>
                <h2>I still have to...</h2>
                {this.state.activities.map((item, index) => {
                  return (
                    <List
                      text={item.text}
                      number={item.number}
                      status={item.status}
                      key={index}
                    />
                  );
                })}
              </ul>
            </Route>
            <Route to="/Help.js" component={Help}></Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}
