import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MyWeb from './components/webBrowser';

export default function App() {
  return (
    <View style={styles.container}>
      <MyWeb />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 40,
    margin: 40,
    borderWidth: 2,
    borderColor: 'lightgray'
  },
});
