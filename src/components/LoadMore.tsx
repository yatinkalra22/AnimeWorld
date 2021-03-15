import React, {Component} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {connect} from 'react-redux';
import {addAnimeToTheList, getApiCallUrl} from '../actions/Anime';
export class LoadMore extends Component {
  // calling next page on load more
  onLoadMorePress = async () => {
    const {requestApiUrl} = this.props;
    const searchText = requestApiUrl.split('q=')[1].split('&')[0];
    const pageNumber = requestApiUrl.split('page=')[1];
    const nextPage = parseInt(pageNumber) + 1;
    await this.props.getApiCallUrl(searchText, nextPage);
    await this.props.addAnimeToTheList(searchText, nextPage);
  };
  render() {
    return (
      <View style={styles.loadMoreContainer}>
        <TouchableOpacity
          style={styles.buttonBox}
          onPress={() => {
            this.onLoadMorePress();
          }}>
          <Text style={styles.loadMoreText}>Load More</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const mapStateToProps = state => ({
  requestApiUrl: state.animeReducer.requestApiUrl,
});
export default connect(mapStateToProps, {
  addAnimeToTheList,
  getApiCallUrl,
})(LoadMore);

const styles = StyleSheet.create({
  loadMoreContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  buttonBox: {
    width: 250,
    padding: 15,
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 10,
  },
  loadMoreText: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});
