import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';

const SearchBar = ({placeholder, onChangeText, value, onPress}) => {
  return (
    <View style={{flexDirection: 'row'}}>
      <TextInput
        style={{
          backgroundColor: 'grey',
          height: 40,
          margin: 12,
          width: 250,
          padding: 10,
          borderRadius: 20,
          marginRight: 30,
        }}
        placeholder={placeholder}
        onChangeText={onChangeText}
        value={value}></TextInput>
      <TouchableOpacity
        style={{
          backgroundColor: 'grey',
          justifyContent: 'center',
          alignItems: 'center',
          padding: 2,
          borderRadius: 10,
        }}
        onPress={onPress}>
        <Text>SEARCH</Text>
      </TouchableOpacity>
    </View>
  );
};
export default SearchBar;
