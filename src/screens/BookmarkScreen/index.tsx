import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { RootTabScreenProps } from '../../types/navigation';

import CustomText from '../../components/CustomText';
import useBookmarks from '../../hooks/useBookmarks';

import styles from './styles';

import Issue from '../IssuesScreen/Issue';
import Colors from '../../constants/Colors';

export default function BookmarksScreen({navigation}: {navigation: RootTabScreenProps<'Bookmark'>}) {
  const bookmarksManager = useBookmarks();
  const { bookmarks } = bookmarksManager.data;
  const { getBookmarks } = bookmarksManager.actions;

  useEffect(getBookmarks, []);

  return (
    <View style={styles.container}>
      {bookmarks.length ? 
        <FlatList
          data={bookmarks}
          contentContainerStyle={{ paddingTop: 16 }}
          keyExtractor={(item) => item.id + ''}
          renderItem={({ item }) => <Issue issue={{ ...item, isBookmarked: true }} navigation={navigation} />}
      /> : 
      <View style={styles.emptyContent}>
        <Feather size={60} color={Colors.border + '88'} name="star"/>
        <CustomText style={styles.emptyText}>You don't have bookmarks yet!</CustomText>
      </View>}
    </View>
  );
}
