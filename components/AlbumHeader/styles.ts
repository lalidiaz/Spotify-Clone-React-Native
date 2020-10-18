import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container:{ 
    alignItems:'center',
    padding:20
  },
  image:{
    width:175,
    height:175,
    margin:15
  },
  name:{
    color:'white',
    fontSize:30,
    fontWeight:'bold'
  },
  creatorContainer:{
    flexDirection: 'row',
    margin:10
  },
  creator:{
    color:'lightgray',
    margin: 5,
    fontSize:18
  },
  likes:{
    color:'lightgray',
    margin:5,
    fontSize:18
  },
  button:{
    backgroundColor: '#1CD05D',
    height:55,
    width:150,
    borderRadius:50,
    justifyContent:'center',
    alignItems:'center'
  },
  buttonText:{
    color: 'white',
    fontSize: 20,
    fontWeight:'bold',
  }
})

export default styles;
