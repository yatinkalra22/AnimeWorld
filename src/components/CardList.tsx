import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import Card from './Card';
import LoadMore from './LoadMore';
import {getAnimeList, getApiCallUrl} from '../actions/Anime';

export class CardList extends Component {
  // fetching narutos series initially
  async componentDidMount() {
    await this.props.getApiCallUrl('naruto');
    await this.props.getAnimeList('naruto');
  }
  componentDidUpdate(prevProps) {
    if (this.props.animeList.length !== prevProps.animeList.length) {
      return true;
    }
  }
  render() {
    const {animeList, isLoading} = this.props;
    return (
      <ScrollView
        style={styles.cardListContainer}
        contentContainerStyle={{
          flexGrow: 2,
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
        contentInsetAdjustmentBehavior="automatic"
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        {animeList.map((anime, index) => {
          return (
            <Card key={index} title={anime.title} imageUrl={anime.image_url} />
          );
        })}
        {isLoading ? <View></View> : <LoadMore />}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  animeList: state.animeReducer.animeList,
  isLoading: state.loadingReducer.isLoading,
});
export default connect(mapStateToProps, {
  getAnimeList,
  getApiCallUrl,
})(CardList);

const styles = StyleSheet.create({
  cardListContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    marginBottom: 10,
  },
});
