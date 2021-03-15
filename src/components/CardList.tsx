import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, StyleSheet, ScrollView} from 'react-native';
import Card from './Card';
import {getAnimeList, getApiCallUrl} from '../actions/Anime';

export class CardList extends Component {
  // fetching narutos series initially
  async componentDidMount() {
    await this.props.getApiCallUrl('naruto');
    await this.props.getAnimeList('naruto');
  }
  render() {
    const {animeList} = this.props;
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
            <Card
              key={anime.mal_id}
              title={anime.title}
              imageUrl={anime.image_url}
            />
          );
        })}
      </ScrollView>
    );
  }
}

const mapStateToProps = state => ({
  animeList: state.animeReducer.animeList,
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
  },
});
