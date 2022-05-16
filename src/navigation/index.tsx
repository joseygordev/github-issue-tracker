import * as React from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ColorSchemeName, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import FiltersScreen from '../screens/FiltersScreen';
import IssueDetailsScreen from '../screens/IssueDetailsScreen';
import IssuesScreen from '../screens/IssuesScreen';
import BookmarkScreen from '../screens/BookmarkScreen';
import CustomText from '../components/CustomText';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types/navigation';
import LinkingConfiguration from './LinkingConfiguration';

export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  const navigation = useNavigation();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Group
        screenOptions={{
          presentation: 'modal', 
          headerLeft: () => {
            return <CustomText onPress={() => navigation?.goBack()}>Back</CustomText>
          }
      }}>
        <Stack.Screen name="Filters" component={FiltersScreen} />
        <Stack.Screen name="IssueDetails" component={IssueDetailsScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="Issues"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="Issues"
        component={IssuesScreen}
        options={({ navigation }: RootTabScreenProps<'Issues'>) => ({
          title: 'Issues',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Filters')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="filter"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="Bookmark"
        component={BookmarkScreen}
        options={({ navigation }: RootTabScreenProps<'Bookmark'>) => ({
          title: 'Bookmark',
          tabBarIcon: ({ color }) => <TabBarIcon name="bookmark" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('Filters')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="filter"
                size={25}
                color={Colors[colorScheme].text}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
        })}
      />
    </BottomTab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
