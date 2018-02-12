import React from 'react';
import { Header, Segment, Divider } from 'semantic-ui-react';

class CreateLesson extends React.Component {
  render() {
    return(
      <Segment>
        <Header as='h1'>Lesson Creator</Header>
        <Divider />
        <Header as='h3'>Add a title</Header>
        <Divider />
        <Header as='h3'>Add a definition</Header>
        <Divider />
        <Header as='h3'>Add a video clip</Header>
        <Divider />
        <Header as='h3'>Add supporting text</Header>
        <Divider />
        <Header as='h3'>Add an image</Header>
        <Divider />
        <Header as='h3'>Add a concluding statement</Header>
      </Segment>
    )
  }
}

export default CreateLesson;
