import React, { Component } from 'react';
import { Card, CardSection, Input, Map } from './common';


class CreateItinerary extends Component {
  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label="Name"
            placeholder="New York trip"
            onChangeText={() => {}}
            value="hi" />
        </CardSection>

        <CardSection>
          <Map />
        </CardSection>
      </Card>
    );
  }
}

export default CreateItinerary;