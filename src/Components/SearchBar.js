import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
          <AntDesign name="search1" size={23} />
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
    width: 40,
    height: 40,
  },
  searchBarButtonTextStyle: {
    color: 'white',
  },
});
