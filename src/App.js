import React, { useState, Fragment } from "react";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/users/Users";
import axios from "axios";
import Search from "./components/users/Search";
import { Alert } from "./components/layout/Alert";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "./components/pages/About";
import User from "./components/users/User";
import GithubState from "./context/github/GithubState";

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // puts initial 30 users on the page when it first loads
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const res = await axios.get(
  //     `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
  //   );
  //   this.setState({ users: res.data, loading: false });
  // }

  // Search gitHub users

  // git a github user
  const getUser = async (login) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // this.setState({ user: res.data, loading: false, alert: null });
    setUser(res.data);
    setLoading(false);
    setAlert(null);
  };

  // get user's repos
  const getUserRepos = async (login) => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // this.setState({ repos: res.data, loading: false, alert: null });
    setRepos(res.data);
    setLoading(false);
    setAlert(null);
  };
  // clear users from state
  const clearUsers = () => {
    // this.setState({ users: [], loading: false });
    setUsers([]);
    setLoading(false);
  };

  //renders an alert if nothing in entered
  const showAlert = (message, colorType) => {
    // same as: this.setState({ alert: { message:message, colorType:colorType } });
    // this.setState({ alert: { message, colorType } });
    setAlert({ message, colorType });
    // setTimeout(() => {
    //   this.setState({alert:null})
    // }, 3000);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={alert} />
            <Switch>
              <Redirect from="/github_finder" to="/" />
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      showClearBtn={users.length > 0 ? true : false}
                      clearUsers={clearUsers}
                      setAlert={showAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route exact path="/about" component={About} />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <Fragment>
                    <User
                      {...props}
                      getUser={getUser}
                      getUserRepos={getUserRepos}
                      repos={repos}
                      user={user}
                      loading={loading}
                    />
                  </Fragment>
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
