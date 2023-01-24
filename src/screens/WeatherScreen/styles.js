import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,

    width: '100%',
    height: '100%',
    backgroundColor: '#abaed3',
  },

  searchBarContainer: {
    backgroundColor: '#9da0c2',
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
    color: 'red',
  },
  temperatureSecondaryContainer: {marginLeft: 20},
  temperatureSecondaryContainerText: {
    fontSize: 25,
    fontWeight: 'bold',
    // color: '#F6B092',
    color: 'blue',
  },
  backgroundImageStyle: {
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    height: '100%',
  },
});

export default styles;
