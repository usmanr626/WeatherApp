import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Alert,
  ActivityIndicator,
} from 'react-native';
import styles from './styles';
import images from '../../assets/images/images';
import {SearchBar} from '../../Components';
import Geolocation from '@react-native-community/geolocation';
const WeatherScreen = () => {
  const currentTime = new Date();
  const [dayTime, setDayTime] = useState(Boolean);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState({});
  const [sunrise, setSunrise] = useState('');
  const [updatedSunrise, setUpdatedSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [updatedSunset, setUpdatedSunset] = useState('');
  const [show, setShow] = useState(false);

  console.log('Current Time: ', currentTime);

  useEffect(() => {
    if (currentTime.getHours() >= 7 && currentTime.getHours() < 19) {
      console.log('DAY');
      setDayTime(true);
    } else {
      console.log('Night');
      setDayTime(false);
    }
  }, []);

  const getCurrentWeather = async () => {
    console.log('Run');

    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    try {
      const response = await fetch(
        'https://api.openweathermap.org/data/2.5/weather?lat=24.86&lon=67.00&appid=f4cba768c7d4c28c5470107db6d0cfbd',
        requestOptions,
      );
      let result = await response.json();
      console.log('Complete Data here: ', result);
      setShow(true);
      setSunrise(result.sys.sunrise);
      setSunset(result.sys.sunset);
      setData(result);

      calculateSunTime();
    } catch (error) {
      console.log('Error', error);
    }
  };

  const calculateSunTime = () => {
    //TODO: calculate Sunrise and Sunset Time
  };

  useEffect(() => {
    getCurrentWeather();
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {show ? (
        <>
          {/* Search Bar */}
          <View style={styles.searchBarContainer}>
            <View>
              <SearchBar
                placeholder="Search"
                onChangeText={setSearchTerm}
                value={searchTerm}
                onPress={() => console.log('Data : ', data)}
              />
            </View>
          </View>
          {/* Current Temp */}

          <View style={styles.backgroundImageContainer}>
            <ImageBackground
              source={dayTime ? images.day1 : images.night2}
              style={styles.backgroundImageStyle}
              resizeMode="contain">
              {/* Temperature and Details */}
              <View style={styles.temperatureMainContainer}>
                <Text style={styles.temperatureMainContainerText}>
                  {/* {data?.main?.temp} */}
                  {setShow
                    ? (data?.main?.temp - 273.15).toFixed()
                    : 'Fetching Data'}
                </Text>
              </View>

              <View style={styles.temperatureSecondaryContainer}>
                <Text style={styles.temperatureSecondaryContainerText}>
                  {/* Feels Like: {data.main.feels_like} */}
                  {setShow
                    ? `Feels like:  ${(
                        data?.main?.feels_like - 273.15
                      ).toFixed()}`
                    : 'Fetching Data'}
                </Text>
                <Text style={styles.temperatureSecondaryContainerText}>
                  {/* {data.weather[0].main} */}
                  {/* {setShow ? data?.weather[0]?.main : 'Fetching Data'} */}
                </Text>
                <Text style={styles.temperatureSecondaryContainerText}>
                  {/* {data.weather[0].main} */}
                  {setShow ? data?.name : 'Fetching Data'}
                </Text>
              </View>
            </ImageBackground>
          </View>

          {/* Additinal Detailst */}
          <View
            style={{
              marginHorizontal: 20,
              backgroundColor: 'purple',
              width: '90%',
              height: '10%',
            }}>
            <Text>{setShow ? data?.sys?.country : 'Fetching Data'}</Text>
            <Text>Sunrise: {sunrise}</Text>
            <Text>Sunset: {sunset}</Text>
          </View>
        </>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </SafeAreaView>
  );
};
export default WeatherScreen;
