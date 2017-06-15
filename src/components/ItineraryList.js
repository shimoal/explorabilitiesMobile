import React, { Component } from 'react';
import { ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from './common';
import { fetchItineraries } from '../actions';

class ItineraryList extends Component {
  componentWillMount() {
    this.props.fetchItineraries();

    this.createDateSource(this.props);
  }



  createDateSource(props) {
    console.log(props);
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(props.itineraries);
  }


  renderRow(itinerary) {
    return <Text> {itinerary.name} </Text>;
  }

  render() {
    return (
      <Card>
        <ListView 
          enableEmptySections
          dataSource={this.dataSource}
          renderRow={this.renderRow} />
      </Card>
    );
  }

}

const mapStateToProps = state => {
  const itineraries = state.itineraries;

  return { itineraries };
}

export default connect(mapStateToProps, { fetchItineraries })(ItineraryList);