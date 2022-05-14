import React, { useEffect } from 'react';
import { ActivityIndicator, Button, FlatList, LayoutAnimation } from 'react-native';

import Colors from '../../constants/Colors'
import { RootTabScreenProps } from '../../types/navigation';

import useIssues from '../../hooks/useIssues';

import CustomView from '../../components/CustomView';
import CustomText from '../../components/CustomText';
import Issue from './Issue';

import styles from './styles'

export default function IssuesScreen({navigation}: {navigation: RootTabScreenProps<'Issues'>}) {
  const issuesManager = useIssues();

  const { issues, loading: loadingIssues, filtersActived, currentPage, error } = issuesManager.data;
  const { getIssues, setPage } = issuesManager.actions;

  useEffect(() => {
    getIssues();
  }, []);
  
  useEffect(() => {
    LayoutAnimation.easeInEaseOut();
  }, []);

  return (
    <CustomView style={styles.container}>
      <CustomView testID="scrollWrapper" style={styles.containerFiltersSelected}>
        {filtersActived.length && (
          <>
            <CustomText>Filters actived:</CustomText>
            <CustomText style={styles.filtersLabel}>
              {filtersActived.map(({ id, label }, index: number) => (
                <CustomText key={id}>{`${label} issues${index < filtersActived.length-1 ? ',' : ''}`}</CustomText>
              ))}
            </CustomText>
          </>
        )}
      </CustomView>

      {error && <CustomText style={styles.error}>An error occurred: {error.message}</CustomText>}

      {loadingIssues ? (
        <CustomView style={styles.loading}>
          <ActivityIndicator color={Colors.dark.tint} />
        </CustomView>
      ) : (
        <FlatList
          data={issues}
          testID="flatList"
          keyExtractor={(item) => item.id + ''}
          contentContainerStyle={styles.issuesContainer}
          renderItem={({ item }) => (
            <Issue issue={{ ...item}} navigation={navigation} />
          )}
        />
      )}

      <CustomView pointerEvents="box-none" style={styles.paginationButtons}>
        <Button
          disabled={currentPage < 2}
          title="Previous"
          testID="previousPageButton"
          onPress={() => setPage(currentPage - 1)}
        />
        <Button
          title="Next"
          testID="nextPageButton"
          onPress={() => setPage(currentPage + 1)}
        />
      </CustomView>
    </CustomView>
  );
}


