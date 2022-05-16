import React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { IssueItemProps } from '../../../types/issues';

import CustomText from '../../../components/CustomText';
import Header from './Header';

import styles from './styles';

export default function Issue(props: IssueItemProps) {
  const navigation = useNavigation();

  const { issue } = props;

  const goToDetails = () => {
    navigation.navigate('IssueDetails', {
      issue: issue
    })
  };

  return (
    <TouchableOpacity testID="cardButton" activeOpacity={0.8} onPress={goToDetails} style={styles.card}>
      <Header issue={issue} />
      <CustomText style={styles.title}>{issue.title}</CustomText>
      <View style={styles.labels}>
        {issue.labels.map((label: any) => (
          <View key={label.id} style={[styles.label, { backgroundColor: '#' + label.color }]}>
            <CustomText style={styles.labelText}>
              {label.name.replace(/\:([a-z]+)\:/g, '')}
            </CustomText>
          </View>
        ))}
      </View>
    </TouchableOpacity>
  );
}
