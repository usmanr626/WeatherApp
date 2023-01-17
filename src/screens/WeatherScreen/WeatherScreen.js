import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import styles from './styles';
import images from '../../assets/images/images';

const WeatherScreen = () => {
  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* Search Bar */}
      <View style={styles.searchBarContainer}>
        <TouchableOpacity onPress={() => console.warn('SEARCH')}>
          <Text>SEARCH</Text>
        </TouchableOpacity>
      </View>
      {/* Current Temp */}

      <View style={styles.backgroundImageContainer}>
        <ImageBackground
          source={images.day4}
          style={styles.backgroundImageStyle}
          resizeMode="contain">
          {/* Temperature and Details */}
          <Text>sssadadasdasd</Text>
        </ImageBackground>
      </View>

      {/* Week Forecast */}
      <View
        style={{
          marginHorizontal: 20,
          backgroundColor: 'purple',
          width: '90%',
          height: '10%',
        }}>
        <Text>ss</Text>
      </View>
    </SafeAreaView>
  );
};
export default WeatherScreen;