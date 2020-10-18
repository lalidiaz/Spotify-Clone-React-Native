import { StyleSheet } from 'react-native';



const styles = StyleSheet.create({
  container:{
    position: 'absolute',
    bottom:79,
    backgroundColor: '#131313',
    flexDirection: 'row',
    width:'100%',
    borderColor:'black',
    borderWidth: 2,
    alignItems:'center'

  },
  rightContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex:1,
  },
  nameContainer:{
    flexDirection:'row',
    alignItems:'center'
  },
  iconsContainer:{
    flexDirection:'row',
    alignItems:'center',
    width:100,
    justifyContent:'space-around'

  },
  image:{
    width:75,
    height:75,
    marginRight: 10
  },
  title:{
    color:'white',
    fontSize:18,
    fontWeight: 'bold',
    margin:10
  },
  artist:{
    color:'lightgray',
    fontSize:18
  }
})
export default styles;
