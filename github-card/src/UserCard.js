import React from 'react';
import './App.css';
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
    this.fetchFollowersArray(this.state.followersLink)
    console.log("Followers url: ",this.state.followersLink);
  }

  // handleUsernameChange = (e) => {
  //   this.setState({
  //     username: e.target.value
  //   });
  // };

  // handleSearch = (e) => {
  //   e.preventDefault();
  //   this.fetchUser(this.state.username);
  // };

  fetchUser = () => {
    fetch("https://api.github.com/users/fatima-rizvi")
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

  fetchFollowersArray = () => {
    fetch("https://api.github.com/users/fatima-rizvi/followers")
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
      <div className = 'all-cards'>
        <div className = 'userCard'>
          <img src = {this.state.picture} key = {this.state.picture} alt = 'profile pic' />
          <div className = 'card-info'>
              <p className = 'username'>Username: {this.state.username}</p>
              <p>Profile:  
                  <a href = {this.state.profile}>{this.state.profile}</a>
              </p>
              {/* <p>Followers: {this.state.followers}</p>
              <p>Following: {this.state.following}</p> */}
          </div>
        </div>
        {/* <br /> */}
        <h2>Followers:</h2>
        {/* <div className = "followerCards"> */}
          {this.state.followersArray.map((follower) => (
              <div className = 'userCard'>
                <img src = {follower.avatar_url} alt = 'profile pic' />
                <div className = 'card-info'>
                    <p className = 'username'>Username: {follower.login}</p>
                    <p>Profile: 
                        <a href = {follower.html_url}>{follower.html_url}</a>
                    </p>
                </div>
              </div>
            ))}
        {/* </div> */}
        {/* <FollowerCards followersLink = {this.state.followersLink} /> */}
      </div>
    )
  }

};

export default UserCard;
