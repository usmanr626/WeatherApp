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
  const [location, setLocation] = useState({});
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState({});
  const [sunrise, setSunrise] = useState('');
  const [updatedSunrise, setUpdatedSunrise] = useState('');
  const [sunset, setSunset] = useState('');
  const [updatedSunset, setUpdatedSunset] = useState('');
  const [show, setShow] = useState(false);
  const getCurrentWeather = async () => {
    console.log('Run');
    console.log('lat:', {location});
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
    // console.log('sun:', sunset);
    // var sunRiseDate = new Date(sunrise * 1000);
    // // Hours part from the timestamp
    // var sunRiseHours = sunRiseDate.getHours();
    // // Minutes part from the timestamp
    // var sunRiseMinutes = sunRiseDate.getMinutes();
    // // Will display time in 10:30 format
    // var SunriseFormattedTime = sunRiseHours % 12 || 12;
    // SunriseFormattedTime += ':' + sunRiseMinutes.substring(-2);
    // // get the AM/PM
    // var ampm = sunRiseHours >= 12 ? ' pm' : ' am';
    // console.warn(SunriseFormattedTime + ampm);
    // // return time in 6:45pm format
    // setUpdatedSunrise(SunriseFormattedTime + ampm);
    // var sunsetDate = new Date(sunset * 1000);
    // // Hours part from the timestamp
    // var sunsetHours = sunsetDate.getHours();
    // // Minutes part from the timestamp
    // var sunsetMinutes = '0' + sunsetDate.getMinutes();
    // // Will display time in 10:30 format
    // var SunsetFormattedTime = sunsetHours % 12 || 12;
    // SunsetFormattedTime += ':' + sunsetMinutes.substring(-2);
    // // get the AM/PM
    // var ampm = sunsetHours >= 12 ? ' pm' : ' am';
    // console.warn(SunsetFormattedTime + ampm);
    // // return time in 6:45pm format
    // setUpdatedSunset(SunsetFormattedTime + ampm);
  };

  const getCurrentLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
        console.log('lat:', position.coords.latitude);
        console.log('long:', position.coords.longitude);
      },
      error => console.log(error),
      {
        enableHighAccuracy: true,
        timeout: 2000,
        maximumAge: 1000,
      },
    );
  };
  useEffect(() => {
    getCurrentLocation();
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
              source={images.day4}
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
