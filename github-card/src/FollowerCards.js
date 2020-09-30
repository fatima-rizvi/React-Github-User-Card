import React from 'react';
import ReactDom from 'react-dom';
import './App.css';

class FollowerCards extends React.Component {

    state = {
      followersAPI: `${this.props.followersLink}`,
      followersArray: []
    };  
  
    componentDidMount() {
      //this.fetchUser(this.state.username)
      this.fetchFollowersArray(this.state.followersAPI)
      console.log("Followers url: ",this.state.followersAPI);
    }
  
  //   handleUsernameChange = (e) => {
  //     this.setState({
  //       username: e.target.value
  //     });
  //   };
  
  //   handleSearch = (e) => {
  //     e.preventDefault();
  //     this.fetchUser(this.state.username);
  //   };
  
    // fetchUser = (username) => {
    //   fetch(`https://api.github.com/users/${username}`)
    //     .then((res) => res.json())
    //     .then((data) => {
    //       console.log("Json results: ", data)
    //       console.log("Hopefully username: ", data.login)
    //       console.log("All followers: ", data.followers_url)
    //       this.setState({
    //           name: data.name,
    //           picture: data.avatar_url,
    //           username: data.login,
    //           profile: data.html_url,
    //           followers: data.followers,
    //           followersLink: data.followers_url,
    //           following: data.following,
    //           followingLink: data.following_url
    //       });
    //     })
    //     .catch((err) => console.log("error: ", err));
    // };
  
    fetchFollowersArray = (followersLink) => {
      fetch(`${followersLink}`)
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
      console.log("FollowerCards state: ",this.state)
      return(
        <h1>Hi</h1>
      )
      // return (
      //   <div className = 'card'>
      //     <img src = {this.state.picture} key = {this.state.picture} alt = 'profile pic' />
      //     <div className = 'card-info'>
      //         <h3 className = 'username'>Name: {this.state.name}</h3>
      //         <p>Username: {this.state.username}</p>
      //         <p>Profile: 
      //             <a href = {this.state.profile}>{this.state.profile}</a>
      //         </p>
      //         <p>Followers: {this.state.followers}</p>
      //         <p>Following: {this.state.following}</p>
      //     </div>
      //   </div>
      // )
    }
  
  };
  
  export default FollowerCards;
  