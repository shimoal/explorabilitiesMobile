import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card, CardSection, Input, Map, Button } from './common';
import { changeName, saveItinerary } from '../actions';


class CreateItinerary extends Component {
  onButtonPress() {

  }

  render() {
    const { name, changeName } = this.props;
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="New York trip"
            onChangeText={changeName}
            value={name} />
        </CardSection>

        <CardSection>
          <Map />
        </CardSection>

        <CardSection>
          <Button onPress={this.onButtonPress.bind(this)}>
            Save
          </Button>
        </CardSection>
      </Card>
    );
  }
}

const mapStateToProps = ({ currentItinerary }) => {
  return { name } = currentItinerary;
}

export default connect(mapStateToProps, { changeName, saveItinerary })(CreateItinerary);