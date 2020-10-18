import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    margin:10,
  },
  rightContainer:{
    justifyContent:'space-around',
    marginLeft:15
  },
  image:{
    width:75,
    height:75
  },
  title:{
    color:'white',
    fontSize:24
  },
  artist:{
    color:'lightgray',
    fontSize:20
  }
})
export default styles;
