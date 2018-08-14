// External deps
import React, {Component} from 'react';

// Modules
import {getRandomFromArray} from '../modules/helpers';

// Components
import Header from './Header';
import TodoList from './TodoList';



class App extends Component {
  render(){
    const randomTagline = getRandomFromArray([
      'This could be your wish list',
      'What do you want to do today?',
      'Get stuff done!',
      'Just do it!'
    ]);

    return (
      <article className="container">
        <Header tagline={randomTagline} />
        <TodoList />
      </article>
    );
  }
}

export default App;
