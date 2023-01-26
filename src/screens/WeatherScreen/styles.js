import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    width: '100%',
    height: '100%',
    backgroundColor: '#abaed3',
  },

  searchBarContainer: {
    backgroundColor: '#8984c6',
    width: '100%',
    height: '8%',
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  backgroundImageContainer: {
    marginHorizontal: 10,
    height: '70%',
    marginBottom: 10,
  },
  temperatureMainContainer: {marginLeft: 20},
  temperatureMainContainerText: {
    fontSize: 65,
    fontWeight: 'bold',
    // color: '#F6B092',
    // fontFamily: 'unbounded',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  temperatureSecondaryContainer: {marginLeft: 20},
  temperatureSecondaryContainerText: {
    fontSize: 25,
    fontWeight: 'bold',
    // color: '#F6B092',
    color: 'white',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
  },
  backgroundImageStyle: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    height: '100%',
    borderRadius: 20,

    overflow: 'hidden',
  },
  locationCountryText: {
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'black',
    textShadowOffset: {width: 1, height: 1},
    textShadowRadius: 5,
    fontSize: 30,
  },
  additionalDetailsContainer: {
    marginHorizontal: 20,
    backgroundColor: '#8984c6',
    width: '90%',
    height: '10%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    flexDirection: 'row',
  },
  partition: {
    width: 2,
    height: '80%',
    backgroundColor: '#abaed3',
  },
  sunTime: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 3,
  },
});

export default styles;
