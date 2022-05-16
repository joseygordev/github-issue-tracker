import React from 'react';
import { View, Image } from 'react-native';
import moment from 'moment';

import { CommentProps } from '../../../types/comments';

import CustomText from '../../../components/CustomText';

import styles from './styles';

export default function Comment(props: CommentProps) {
  const { comment } = props;

  return (
    <View style={[styles.card, { marginHorizontal: 8 }]}>
      <View style={styles.user}>
        <Image style={styles.profileImage} source={{ uri: comment.user.avatar_url }} />
        <CustomText style={styles.username}>{comment.user.login}</CustomText>
        <CustomText style={styles.timeAgoText}> • {moment.duration(moment().diff(moment(comment.created_at))).humanize() + ' ago'}</CustomText>
      </View>
      <CustomText style={styles.title}>{comment.body}</CustomText>
    </View>
  );
}
