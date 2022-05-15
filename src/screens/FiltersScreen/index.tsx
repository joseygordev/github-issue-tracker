import React, { useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import useIssues from '../../hooks/useIssues';
import useIssuesScreen from '../../hooks/useIssuesScreen';

import Colors from '../../constants/Colors';

import CustomView from '../../components/CustomView';
import CustomText from '../../components/CustomText';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

import styles from './styles';
import { useEffect } from 'react';

export default function FiltersScreen() {
  const navigation = useNavigation();
  const issuesManager = useIssues();
  const { filters } = issuesManager.data;
  const { setFilter } = issuesManager.actions;

  const currentPageManager = useIssuesScreen();
  const { owner: commitedOwner, repo: commitedRepo } = currentPageManager.data;
  const { commitOwner, commitRepo } = currentPageManager.actions;

  const [owner, setOwner] = useState(commitedOwner);
  const [repo, setRepo] = useState(commitedRepo);
  const [filtersSelected, setFiltersSelected] = useState<string[]>([]);

  useEffect(() => {
    if (filters.length) {
      setFiltersSelected([
        ...filtersSelected,
        ...filters.filter((filter) => filter.isActive && !filtersSelected.includes(filter.id)).map((filter) => filter.id)
      ]);
    }
  }, [filters]);

  const viewIssues = () => {
    commitOwner(owner);
    commitRepo(repo);
    setFilter(filtersSelected);
    navigation.goBack();
  };

  const handleFilterSelection = (id: string): void => {
    if (!filtersSelected.includes(id)) {
      setFiltersSelected([...filtersSelected, id]);
    } else {
      setFiltersSelected(filtersSelected.filter((item) => item !== id));
    }
  }

  const githubIcon = <AntDesign size={20} color={Colors.blue} name="github" style={{ marginRight: 6 }} />;

  return (
    <CustomView style={styles.container}>
      <View>
        <View style={styles.inputs}>
          <CustomTextInput name="Organization" testID="organizationInput" value={owner} onChangeText={setOwner} />
          <CustomText style={{ marginTop: 20, fontSize: 20, color: Colors.border }}>/</CustomText>
          <CustomTextInput name="Repository" value={repo} onChangeText={setRepo} />
        </View>
        <CustomText>Filters:</CustomText>
        {filters.map(({ id, label }) => (
          <TouchableOpacity
            onPress={() => handleFilterSelection(id)}
            activeOpacity={1}
            testID={id}
            key={id}
            style={[styles.filter, filtersSelected.includes(id) && styles.activeFilter]}
          >
            <CustomText>{label} issues</CustomText>
          </TouchableOpacity>
        ))}
      </View>
      <CustomButton style={styles.button} type="primary" text="View issues" testID="viewIssuesButton" leftIcon={githubIcon} onPress={viewIssues} />
    </CustomView>
  );
}

