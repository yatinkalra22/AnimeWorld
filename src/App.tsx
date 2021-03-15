import React from 'react';
import type {Node} from 'react';
import {Provider} from 'react-redux';
import store from './store';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SafeAreaView, StyleSheet} from 'react-native';
import Search from './components/Search';
import RequestApi from './components/RequestApi';
import CardList from './components/CardList';

const App: () => Node = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.appContainer}>
        <Search />
        <RequestApi />
        <CardList />
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    backgroundColor: '#2476C1',
    padding: wp('5'),
    height: hp('100'),
  },
});

export default App;
