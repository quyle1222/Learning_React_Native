import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { max } from "react-native-reanimated";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#eaeaea"
    },
    titleTopContainer: {
        flex:1,
      marginLeft:20,
      marginTop: 16,
      color: "#20232a",
      fontWeight: "bold",
      alignItems:"center",
      justifyContent:"center"
    },
    textInputStyle:{
          height:50,
          margin:10,
          borderColor:"#1293",
          borderRadius:5,
          borderWidth:2
    },
    buttonStyles:{
        height:50,
        width:200, 
        justifyContent:"center",
        shadowColor:"white",
        shadowRadius:10,
        backgroundColor:"#2E8FF5",
        flexDirection:"column",
        alignItems:"center",
        borderRadius:50
    },
    textButtonStyles:{
      color:"red"
    },
    bottomContainer:{
        flex:1,
        flexDirection:"column",
        justifyContent: 'flex-end',
        marginBottom:20
    }
  });
  export default styles;