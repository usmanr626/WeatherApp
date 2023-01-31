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
import Feather from 'react-native-vector-icons/Feather';

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
  const [currentLat, setCurrentLat] = useState('');
  const [currentLon, setCurrentLon] = useState('');
  const [searchTrue, setSearchTrue] = useState(false);

  useEffect(() => {
    if (currentTime.getHours() >= 7 && currentTime.getHours() < 19) {
      // console.log('DAY');
      setDayTime(true);
    } else {
      // console.log('Night');
      setDayTime(false);
    }
    getCurrentLocation();
  }, []);

  const getCurrentLocation = () => {
    if (!searchTrue) {
      Geolocation.getCurrentPosition(position => {
        // console.log('Current Position Here: ', position),
        console.log('Current Latitude Here: ', position.coords.latitude),
          setCurrentLat(position.coords.latitude);
        console.log('Current Longitude Here: ', position.coords.longitude);
        setCurrentLon(position.coords.longitude);
      });
      error => {
        console.log('Error getting loaction: ', error);
      };
    } else if (searchTrue) {
      return;
    }
  };

  const getCurrentWeather = async () => {
    // console.log('Run');
    console.log('LATT in get weather:', currentLat);
    console.log('LON in get weather:', currentLon);
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${currentLat}.86&lon=${currentLon}.00&appid=f4cba768c7d4c28c5470107db6d0cfbd`,
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
    console.log('Current Weather Called:', currentLat);
    getCurrentWeather();
    console.log('LATT:', currentLat);
    console.log('LON:', currentLon);
  }, [currentLat, currentLon]);

  const timeStampToTime = value => {
    var date = new Date(value * 1000);
    var hours = date.getHours();
    var minutes = (date.getMinutes() < 10 ? '0' : '') + date.getMinutes();

    return hours + ':' + minutes.substring(-2);
  };

  const getLocation = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm} &appid=f4cba768c7d4c28c5470107db6d0cfbd`,
        requestOptions,
      );
      let result = await response.json();
      console.log('Search Data: ', result);

      setCurrentLat(result.coord.lat);
      setCurrentLon(result.coord.lon);
      console.log('Current Latitude Now is: ', result.coord.lat);
      console.log('Current Longitude Now is: ', result.coord.lon);

      if (result.cod === '404') {
        Alert.alert('Error', result.message);
      }
    } catch (error) {
      Alert.alert('Error', error.message);
    }
  };

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
                onPress={() => getLocation()}
              />
            </View>
          </View>
          {/* Current Temp */}

          <View style={styles.backgroundImageContainer}>
            <ImageBackground
              source={dayTime ? images.day1 : images.night4}
              style={styles.backgroundImageStyle}
              resizeMode="cover">
              {/* Temperature and Details */}
              <View style={styles.temperatureMainContainer}>
                <Text style={styles.temperatureMainContainerText}>
                  {/* {data?.main?.temp} */}
                  {setShow
                    ? `${(data?.main?.temp - 273.15).toFixed()}°C`
                    : 'Fetching Data'}
                </Text>
              </View>

              <View style={styles.temperatureSecondaryContainer}>
                <Text style={styles.temperatureSecondaryContainerText}>
                  {/* Feels Like: {data.main.feels_like} */}
                  {setShow
                    ? `Feels like:  ${(
                        data?.main?.feels_like - 273.15
                      ).toFixed()}°C`
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
                <Text style={styles.locationCountryText}>
                  {setShow ? data?.sys?.country : 'Fetching Data'}
                </Text>
              </View>
            </ImageBackground>
          </View>

          {/* Additinal Detailst */}
          <View style={styles.additionalDetailsContainer}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Feather name="sunrise" size={60} />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.sunTime}>{timeStampToTime(sunrise)}</Text>
              </View>
            </View>

            <View style={styles.partition}></View>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Feather name="sunset" size={60} />
              </View>
              <View
                style={{
                  flex: 1,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={styles.sunTime}>{timeStampToTime(sunset)}</Text>
              </View>
            </View>
          </View>
        </>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </SafeAreaView>
  );
};
export default WeatherScreen;
