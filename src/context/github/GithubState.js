import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./githubContext";
import githubReducer from "./githubReducer";
import {
  SEARCH_USERS,
  GET_USER,
  CLEAR_USERS,
  GET_REPOS,
  SET_LOADING,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };

  const [state, dispatch] = useReducer(githubReducer, initialState);

  // search user
  const searchUsers = async (text) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: SEARCH_USERS, payload: res.data.items });
    // dispatch({ type: SET_ALERT, payload: null });
  };

  // get user
  const getUser = async (login) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${login}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    dispatch({ type: GET_USER, payload: res.data });
  };

  // get repos
  const getUserRepos = async (login) => {
    setLoading();
    const res = await axios.get(
      `https://api.github.com/users/${login}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );
    // this.setState({ repos: res.data, loading: false, alert: null });
    dispatch({ type: GET_REPOS, payload: res.data });

    // setRepos(res.data);
    // setLoading(false);
    // setAlert(null);
  };

  // clear users
  const clearUsers = () => dispatch({ type: CLEAR_USERS });
  // set loading
  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        repos: state.repos,
        loading: state.loading,
        searchUsers,
        clearUsers,
        getUser,
        getUserRepos,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
