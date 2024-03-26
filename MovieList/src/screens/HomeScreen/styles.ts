import {Dimensions, StyleSheet} from 'react-native';
const numOfColumn = 2;
const padding = 10;
const width = Dimensions.get('screen').width / numOfColumn - padding;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  listItemContainer: {
    width: width,
    height: width + width * 0.45,
    padding: padding,
  },
  posterStyle: {
    backgroundColor: 'white',
    width: '100%',
    height: '100%',
    borderRadius: 10,
    justifyContent: 'flex-end',
    borderColor: '#00000050',
    borderWidth: 1,
  },
  titleContainer: {
    backgroundColor: 'white',
    padding: 5,
    fontWeight: '500',
    fontSize: 14,
    color: 'grey',
  },
  listContainerStyle: {
    padding: padding,
  },
});

export default styles;
