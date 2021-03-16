import React, { Component } from "react";

class UserItem extends Component {
  render() {

// stores state in a variable. Allows shorter syntax. Instead of {this.state.login}, you can just write {login} 
const {login, avatar_url, html_url} = this.props.user

    return <div className="card text-center">
    <img className="round-img" src={avatar_url} alt="" style={{width:"60px"}} />
    <h3>{login}</h3>
    <div>
        <a className="btn btn-dark btn-sm my-1" href={html_url}>More</a>
    </div>
    </div>;
  }
}

export default UserItem;
