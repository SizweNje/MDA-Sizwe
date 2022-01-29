
 import {
   StyleSheet
} from 'react-native';

export default StyleSheet.create({
 
  container:{
    padding: 10,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-end' ,
    backgroundColor: '#000000'
  },
  paddding20:{
    padding:20
  },
  homeHeader:{
      marginBottom: 7,
      fontSize:20,
      color: '#fff'
  
  }
  ,
  homeHeaderSub:{
    marginBottom: 20,
    fontSize:17,
    color: '#06d6a0'

},
  nameHeader:{
      margin: 10,
      fontSize:15,
      color: '#06d6a0',
      position: 'absolute',
      top: 0,
      right:0,

  
  }
  ,
    buttonTwo: {
      backgroundColor: '#505050',
      padding: 10,
      marginTop: 20,
      height: 50,
      textAlign: 'center',
      borderRadius:7,
      width:'100%',
      
    },
    buttonTextTwo:{
      color: '#fff',
      textAlign: 'center',
      fontSize: 18
   }
    ,
    buttonThree: {
      backgroundColor: '#1A1A1A',
      padding: 10,
      marginTop: 20,
      marginBottom: 20,
      height: 50,
      textAlign: 'center',
      borderRadius:7,
      width:'100%'
    },
     buttonTextThree:{
      color: 'white',
      textAlign: 'center',
      fontSize: 18
   }
    ,
    buttonOne: {
      backgroundColor: 'green',
      width: '100%',
      height: 40,
      margin: 10,
      color: '#06d6a0'
    }
    ,buttonTextOne:{
      color: '#06d6a0',
      textAlign: 'center',
   },


//Welcom screen styles
    texts:{
      marginBottom: 20,
  },
 
 input: {
    height: 40,
    borderColor: '#696969',
    color:'#fff',
    backgroundColor:'#696969',
    borderWidth: 1,
    padding:10,
    borderRadius: 10,
    marginTop:10,
    marginBottom:20,
    
 },
 header: {
    height: 40,
    padding:10,
    width: "100%",
    fontWeight: 'bold',
    marginTop:50,
    color:'#fff'
 },
 submitButton: {
  marginTop: 10,
    backgroundColor: '#1A1A1A',
    padding: 10,
    width: '65%',
    height: 40,
    textAlign: 'center',
    borderRadius:10,
 },
 removeButton: {
  marginTop: 10,
  marginRight: '3%',
  backgroundColor: '#cccccc',
  width: '32%',
  padding: 10,
  height: 40,
  textAlign: 'center',
  borderRadius:10,
},
 submitButtonText:{
    color: '#fff',
    textAlign: 'center',
 },
 clearButtonText:{
  color: '#000',
  textAlign: 'center',
},
 fixToText: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignSelf: 'flex-end'
},

containerTop:{
  flex:1,
  padding: 20,
  color:'#fff',
  backgroundColor:"#000000"
}
,
textColor:{
  color:"#fff"
}


   
})


