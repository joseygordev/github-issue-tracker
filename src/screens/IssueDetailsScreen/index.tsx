import React, { useEffect } from 'react';
import { View, ScrollView, LayoutAnimation } from 'react-native';
import { useSelector } from 'react-redux';
import { WebView } from 'react-native-webview';
import { AntDesign, Feather } from '@expo/vector-icons';

import { AppState, useTypedDispatch } from '../../data/redux';
import * as commentActions from '../../data/redux/actions/comments';
import * as bookmarkActions from '../../data/redux/actions/bookmarks';

import Colors from '../../constants/Colors';

import { RootTabScreenProps } from '../../types/navigation';

import { parseHtml } from '../../utils/helpers';

import CustomButton from '../../components/CustomButton';
import CustomText from '../../components/CustomText';

import Comment from './Comment';
import Header from '../IssuesScreen/Issue/Header';

import styles from './styles';

export default function IssuesDetailsScreen({route}: RootTabScreenProps<'IssueDetails'>) {
  const dispatch = useTypedDispatch();
  
  const { bookmarks: bookmarks } = useSelector((state: AppState) => state.bookmarksReducer);
  const { comments: comments } = useSelector((state: AppState) => state.commentsReducer);
  
  const { issue } = route.params;
  
  useEffect(() => {
    dispatch(commentActions.getComments(issue.comments_url));
  }, []);

  const addAsBookmark = () => {
    LayoutAnimation.easeInEaseOut();
    dispatch(bookmarkActions.addBookmark(issue.id));
  };

  const removeAsBookmark = () => {
    LayoutAnimation.easeInEaseOut();
    dispatch(bookmarkActions.removeBookmark(issue.id));
  };

  const isBookmarked = bookmarks.some((x) => x === issue.id);
  const bookmarkIcon = <AntDesign size={20} color={Colors.blue} name={isBookmarked ? 'star' : 'staro'} style={{ marginRight: 6 }} />;

  return (
    <ScrollView>
      <View style={styles.card}>
        <Header issue={{ ...issue, isBookmarked }} />
        <CustomText style={styles.title}>{issue.title}</CustomText>
        <View style={styles.divider}></View>
        <WebView source={{ html: parseHtml(issue.body) }} style={{ height: 250 }} />
        <View style={styles.labels}>
          {issue.labels.map((label: any) => (
            <View key={label.id} style={[styles.label, { backgroundColor: '#' + label.color }]}>
              <CustomText style={styles.labelText}>
                {label.name.replace(/\:([a-z]+)\:/g, '')}
              </CustomText>
            </View>
          ))}
        </View>
      </View>
      <CustomButton
        text={isBookmarked ? 'Remove Bookmark' : 'Bookmark'}
        style={styles.bookmarkButton}
        testID="addAsBookmarkButton"
        leftIcon={bookmarkIcon}
        onPress={isBookmarked ? removeAsBookmark : addAsBookmark}
      />
      {comments.length ? (
        <CustomText style={styles.subtitle}>COMMENTS</CustomText>
      ) : (
        <View style={styles.noComments}>
          <Feather size={40} color={Colors.border} name="message-square" style={{ marginRight: 4 }} />
          <CustomText style={styles.noCommentsText}>No comments to show here.</CustomText>
        </View>
      )}
      {comments.map((comment) => (
        <Comment key={comment.id + ''} comment={comment} />
      ))}
    </ScrollView>
  );
}