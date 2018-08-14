import React, {Component} from 'react';

class Header extends Component {
  render(){
    const {tagline} = this.props;

    return (
      <header>
        <h1>What to do?</h1>
        <p className="tagline">{tagline}</p>
      </header>
    );
  }
}

export default Header;
