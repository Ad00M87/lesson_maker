import React from 'react';
import { Segment, Header, Button } from 'semantic-ui-react';
import InlineEdit from 'react-edit-inline'

class Title extends React.Component {
  state = {
    titleSize: 1,
    sectionTitle: this.props.sectionTitle
  }

  toggleSize = (direction) => {
    const { titleSize } = this.state;
    let minValue = 1
    let maxValue = 6
    if (direction == '+' && titleSize < 6) {
      this.setState({ titleSize: titleSize + 1 })
    } else if (direction == '-' && titleSize > 1) {
      this.setState({ titleSize: titleSize - 1 })
    }
  }

  customValidateText = (text) => {
      return (text.length > 0 && text.length < 64);
  }

  dataChanged = (data) => {
    // data = { description: "New validated text comes here" }
    // Update your model from here
    console.log(data)
      this.setState({...data})
  }
  //TODO: need to figure out a way to change InlineEdit
  //TODO: there is a huge bug in the InlineEdit
  render() {
    const { titleSize, sectionTitle } = this.state;
    let size = `h${titleSize}`
    return(
      <Segment>
        <Header as={size}>{sectionTitle}</Header>
        <InlineEdit
          text="hello"
          paramName='hello'
          validate={this.customValidateText}
          change={this.dataChanged}
        />
        <Button onClick={() => this.toggleSize('+')}>Larger</Button>
        <Button onClick={() => this.toggleSize('-')}>Smaller</Button>
      </Segment>
    )
  }
}

export default Title;

//not this again.
