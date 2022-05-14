import React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import CustomView from '../components/CustomView';
import CustomText from '../components/CustomText';

export default function BookmarkScreen() {
  return (
    <CustomView style={styles.container}>
      <CustomText style={styles.title}>Bookmark</CustomText>
      <CustomView style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/BookmarkScreen.tsx" />
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
