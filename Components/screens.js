import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
});
const Button = props => <RN.Button color="#c40707" {...props} />;
const ScreenContainer = ({children}) => (
  <View style={styles.container}>{children}</View>
);

export const Details = ({route}) => (
  <ScreenContainer>
    <Text>Details Screen</Text>
    {route.params.title && <Text>{route.params.title}</Text>}
  </ScreenContainer>
);

export const Search = ({navigation}) => (
  <ScreenContainer>
    <Text>Search Screen</Text>
    <Button title="Search 2" onPress={() => alert('Todo!')} />
    <Button
      title="React Native School"
      onPress={() => {
        alert('Todo!');
      }}
    />
  </ScreenContainer>
);

export const Search2 = () => (
  <ScreenContainer>
    <Text>Search2 Screen</Text>
  </ScreenContainer>
);

export const Profile = ({navigation}) => {
  return (
    <ScreenContainer>
      <Text>Profile Screen</Text>
      <Button title="Drawer" onPress={() => alert('Todo!')} />
      <Button title="Sign Out" onPress={() => alert('Todo!')} />
    </ScreenContainer>
  );
};

export const Splash = () => (
  <ScreenContainer>
    <Text>Loading...</Text>
  </ScreenContainer>
);

export const SignIn = ({navigation}) => {
  return (
    <ScreenContainer>
      <Text>Sign In Screen</Text>
      <Button title="Sign In" onPress={() => alert('Todo!')} />
      <Button
        title="Create Account"
        onPress={() => navigation.push('SignUp')}
      />
    </ScreenContainer>
  );
};

export const CreateAccount = () => {
  return (
    <ScreenContainer>
      <Text>Create Account Screen</Text>
      <Button title="Sign Up" onPress={() => alert('Todo!')} />
    </ScreenContainer>
  );
};
