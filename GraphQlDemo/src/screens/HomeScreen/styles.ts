import {StyleSheet} from 'react-native';
const padding = 10;
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  listItemContainer: {
    width: '100%',
    padding: padding,
    backgroundColor: 'white',
    marginBottom: 10,
    borderRadius: 10,
    borderColor: '#00000040',
    borderWidth: 1,
  },
  itemRowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemAlignStart: {
    alignItems: 'flex-start',
  },
  itemAlignEnd: {
    alignItems: 'flex-end',
  },
  titleTextStyle: {
    fontSize: 14,
    color: 'grey',
  },
  valueTextStyle: {
    fontSize: 16,
    color: 'black',
    fontWeight: '400',
  },
  topMargin: {marginTop: 20},
  listContainerStyle: {
    paddingHorizontal: padding,
  },
});

export default styles;
