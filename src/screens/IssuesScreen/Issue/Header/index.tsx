import React from 'react';
import moment from 'moment';
import { View, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { IssueHeaderProps } from '../../../../types/issues';
import Colors from '../../../../constants/Colors';

import CustomText from '../../../../components/CustomText';

import styles from './styles';

export default function Header(props: IssueHeaderProps) {
  const { issue } = props;

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Image style={styles.profileImage} source={{ uri: issue.user.avatar_url }} />
        <CustomText style={styles.username}>{issue.user.login}</CustomText>
        <CustomText style={styles.timeAgoText}> • {moment.duration(moment().diff(moment(issue.created_at))).humanize() + ' ago'}</CustomText>
        {issue.isBookmarked && (
          <>
            <CustomText style={styles.timeAgoText}> • </CustomText>
            <AntDesign size={16} color={Colors.border} name="star" />
          </>
        )}
      </View>
      <View style={[styles.state, { backgroundColor: issue.state == 'open' ? Colors.green : Colors.border }]}>
        <CustomText style={styles.stateText}>{issue.state[0].toUpperCase() + issue.state.slice(1)}</CustomText>
      </View>
    </View>
  );
}
