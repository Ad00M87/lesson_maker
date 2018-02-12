import React from 'react';
import { Header, Segment, Divider } from 'semantic-ui-react';

class CreateLesson extends React.Component {
  render() {
    return(
      <Segment>
        <Header as='h1'>Lesson Creator</Header>
        <Divider />
        <Header as='h3'>Add a title</Header>
      </Segment>
    )
  }
}

export default CreateLesson;
