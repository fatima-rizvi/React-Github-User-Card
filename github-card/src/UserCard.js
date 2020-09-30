import React from 'react';
import './App.css';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle
} from 'reactstrap';

import FollowerCards from './FollowerCards'

//api link https://api.github.com/users/fatima-rizvi

class UserCard extends React.Component {
  state = {
    name: '',
    picture: '',
    username: 'fatima-rizvi',
    profile: '',
    followers: null,
    followersLink: '',
    followersArray: [],
    following: null,
    followingLink: ''
  };

  componentDidMount() {
    this.fetchUser(this.state.username)
    this.fetchFollowersArray(this.state.username)
    console.log("Followers url: ",this.state.followersLink);
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value
    });
  };

  handleSearch = (e) => {
    e.preventDefault();
    this.fetchUser(this.state.username);
  };

  fetchUser = (username) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("Json results: ", data)
        console.log("Hopefully username: ", data.login)
        console.log("All followers: ", data.followers_url)
        this.setState({
            name: data.name,
            picture: data.avatar_url,
            username: data.login,
            profile: data.html_url,
            followers: data.followers,
            followersLink: data.followers_url,
            following: data.following,
            followingLink: data.following_url
        });
      })
      .catch((err) => console.log("error: ", err));
  };

  fetchFollowersArray = (username) => {
    fetch(`https://api.github.com/users/${username}/followers`)
      .then((res) => res.json())
      .then((data) => {
        this.setState({
            followersArray: data
        })
        console.log("Json results follow: ", data)
      })
      .catch((err) => console.log("error: ", err));
  };

  render() {
    console.log("followers array: ",this.state.followersArray);
    return (
      <div>
        <form onSubmit={this.handleSearch}>
          <input
            onChange={this.handleUsernameChange}
            type="text"
            value={this.state.username}
          />
          <button>Search Username</button>
        </form>
        <div className = 'all-cards'>
          <div className = 'my-card'>
            <Card className = 'userCard'>
              <CardImg top width="100%" src = {this.state.picture} alt = 'profile pic' />
              <CardBody>
                <CardTitle>Username: {this.state.username}</CardTitle>
                <CardText>Profile: <a href = {this.state.profile}>{this.state.profile}</a></CardText>
              </CardBody>
            </Card>
          </div>
          <h2 className = 'followText'>Followers:</h2>
          <div className = "followerCards">
            {this.state.followersArray.map((follower) => (
                <Card className = 'userCard'>
                  <CardImg top width="100%" src = {follower.avatar_url} alt = 'profile pic' />
                  <CardBody>
                    <CardTitle>Username: {follower.login}</CardTitle>
                    <CardText>Profile: <a href = {follower.html_url}>{follower.html_url}</a></CardText>
                  </CardBody>
                </Card>
              ))}
          </div>
        </div>
      </div>
    )
  }

};

export default UserCard;
