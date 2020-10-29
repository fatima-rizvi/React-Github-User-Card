import React from 'react';
import './App.css';
import UserCard from './UserCard';

//api link https://api.github.com/users/fatima-rizvi

class App extends React.Component {

  render() {
    return (
      <div>
        <UserCard />
      </div>
    )
  }

};

export default App;
