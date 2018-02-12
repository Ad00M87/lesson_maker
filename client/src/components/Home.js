import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';

class Home extends Component {
  render() {
    return (
      <Header as='h1' textAlign='center'>Home Component</Header>
      <Segment>
        <Header as='h3' textAlign='center'>Information about the site</Header>
        <Header as='h4' textAlign='center'>Snippet Images</Header>
      </Segment>
    );
  }
}

export default Home;
