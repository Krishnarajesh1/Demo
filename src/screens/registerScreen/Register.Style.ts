import { StyleSheet } from "react-native";

const style = StyleSheet.create({
  primaryContainer:{
    margin:20,
    backgroundColor:'#ffffff',
    height:'70%',
    padding:20
  },
  imageSize:{
    height : 35,
    width : 35,
    borderRadius:20,
    margin:8,
  },
  iconContainer:{
    flexDirection:'row',
    justifyContent: 'center'
  },
  inputText:{
    borderWidth:1,
    borderColor:'#d8e2dc',
    borderRadius:30,
    marginBottom:10,
  },
  headText:{
    fontSize:25,
    color:'#000000',
    textAlign:'center',
    marginTop:20,
    marginBottom:20,
  },
  paraText:{
    fontSize:18,
    textAlign:'center',
    margin:10
  },
  imgSize:{
    height:'100%',
    width:'100%'
  }
}
)

export default style;