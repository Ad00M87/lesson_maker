import React from 'react';
import { Header, Segment, Divider } from 'semantic-ui-react';

class CreateLesson extends React.Component {

  //consider using reusable components so a user can select what they would like
  //to add to a lesson/presentation.
  //TODO: make a preview component concurrently with the editor.

  render() {
    return(
      <Segment>
        <Header as='h1'>Lesson Creator</Header>
        <Divider />
        <Divider />
        <Header as='h3'>Add a title</Header>
        <Divider />
        <Divider />
        <Header as='h3'>Add a definition</Header>
        <Divider />
        <Divider />
        <Header as='h3'>Add a video clip</Header>
        <Divider />
        <Divider />
        <Header as='h3'>Add supporting text</Header>
        <Divider />
        <Divider />
        <Header as='h3'>Add an image</Header>
        <Divider />
        <Divider />
        <Divider />
        <Header as='h3'>Add a concluding statement</Header>
      </Segment>
    )
  }
}

export default CreateLesson;
