import React, {Component} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';

export default class Card extends Component {
  render() {
    const {title, imageUrl} = this.props;
    return (
      <View style={styles.cardBox}>
        <Image
          style={styles.animeLogo}
          source={{
            uri: imageUrl,
          }}
        />
        <Text style={styles.animeTitle}>{title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  cardBox: {
    width: 250,
    height: 'auto',
    borderRadius: 10,
    display: 'flex',
    flexDirection: 'column',
    margin: 10,
  },
  animeLogo: {
    width: 250,
    height: 300,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  animeTitle: {
    backgroundColor: '#fff',
    height: 'auto',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 5,
    paddingRight: 5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    textAlignVertical: 'center',
  },
});
