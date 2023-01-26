import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SearchBar = ({placeholder, onChangeText, value, onPress}) => {
  return (
    <View style={styles.searchBarComponentContainer}>
      <TextInput
        style={styles.searchBarTextInputContainer}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}></TextInput>
      <View style={styles.searchBarButtonContainer}>
        <TouchableOpacity style={styles.searchBarButtonStyle} onPress={onPress}>
          <Text style={styles.searchBarButtonTextStyle}>SEARCH</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  searchBarTextInputContainer: {
    backgroundColor: '#abaed3',
    height: 40,
    margin: 12,
    width: 250,
    padding: 10,
    borderRadius: 20,
    marginRight: 30,
  },
  searchBarComponentContainer: {flexDirection: 'row'},
  searchBarButtonContainer: {justifyContent: 'center', alignItems: 'center'},
  searchBarButtonStyle: {
    backgroundColor: '#abaed3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 2,
    borderRadius: 10,
    width: 70,
    height: 30,
  },
  searchBarButtonTextStyle: {
    color: 'white',
  },
});
