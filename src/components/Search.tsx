import React, {Component} from 'react';
import {connect} from 'react-redux';
import {getAnimeList, getApiCallUrl} from '../actions/Anime';
import {
  View,
  StyleSheet,
  TextInput,
  SafeAreaView,
  Text,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

export class Search extends Component {
  state = {
    searchText: '',
  };
  onPressSearch = async () => {
    const {searchText} = this.state;
    if (searchText.length > 0) {
      await this.props.getApiCallUrl(this.state.searchText);
      await this.props.getAnimeList(this.state.searchText);
    }
  };
  render() {
    const {searchText} = this.state;
    return (
      <View>
        <SafeAreaView style={styles.flexDirectionRow}>
          <TextInput
            style={styles.input}
            placeholder="Search Anime"
            value={searchText}
            onChangeText={text => {
              this.setState({searchText: text});
            }}
            keyboardType="default"
          />
          <TouchableOpacity
            style={styles.buttonBox}
            onPress={() => {
              this.onPressSearch();
            }}>
            <Text style={styles.goButton}>Go</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </View>
    );
  }
}

const mapStateToProps = state => ({});
export default connect(mapStateToProps, {
  getAnimeList,
  getApiCallUrl,
})(Search);

const styles = StyleSheet.create({
  flexDirectionRow: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: '#2D75BA',
    height: 60,
  },
  input: {
    width: Dimensions.get('window').width - 100,
    padding: 15,
    borderWidth: 1,
    fontSize: 18,
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
    color: '#fff',
    borderColor: '#fff',
  },
  buttonBox: {
    padding: 15,
    borderWidth: 1,
    fontSize: 20,
    borderBottomRightRadius: 10,
    borderTopRightRadius: 10,
    borderColor: '#fff',
  },
  goButton: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
  },
});
