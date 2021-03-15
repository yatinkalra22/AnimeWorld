import React, {Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {connect} from 'react-redux';
export class RequestApi extends Component {
  render() {
    const {requestApiUrl, isLoading} = this.props;
    return (
      <View style={styles.statusContainer}>
        <Text style={styles.status}>
          {isLoading ? 'Requesting' : 'Requested'}:
        </Text>
        <Text style={styles.url}> {requestApiUrl} </Text>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  requestApiUrl: state.animeReducer.requestApiUrl,
  isLoading: state.loadingReducer.isLoading,
});
export default connect(mapStateToProps, {})(RequestApi);

const styles = StyleSheet.create({
  statusContainer: {
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  status: {
    color: '#83A7CD',
    fontSize: 19,
    fontWeight: 'bold',
  },
  url: {
    color: '#fff',
    fontSize: 18,
  },
});
