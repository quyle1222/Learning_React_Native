
import React, { useState } from "react";
import {Button,Image,ScrollView,Text,View,TextInput , Alert,TouchableOpacity} from "react-native";
import styles from "./style";
import Item_ScrollView from "./item_ScrollView"
const App = () => {
  const[textInput,setTextInput]=useState("");
  return(
    <View style={styles.container}>
      <View style={styles.titleTopContainer}>
        <Text style={{fontSize: 50,}}>Profile</Text>
      </View>
      <View>
        <TextInput
        style={styles.textInputStyle}
        placeholder =" Input text here"
        value={textInput}
        onChangeText = {setTextInput}
        />
      </View>
      <View>
      <ScrollView horizontal={true}  showsHorizontalScrollIndicator={false} >
            <Item_ScrollView title="Đây là title" uri="https://images.unsplash.com/photo-1606788168886-286b0336272d?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"></Item_ScrollView>
            <Item_ScrollView title="Đây là title" uri="https://images.unsplash.com/photo-1606788168886-286b0336272d?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"></Item_ScrollView>
            <Item_ScrollView title="Đây là title" uri="https://reactnative.dev/img/tiny_logo.png"></Item_ScrollView>
            <Item_ScrollView title="Đây là title" uri="https://reactnative.dev/img/tiny_logo.png"></Item_ScrollView>
            <Item_ScrollView title="Đây là title" uri="https://reactnative.dev/img/tiny_logo.png"></Item_ScrollView> 
          </ScrollView>
          </View>
        <View View style={[styles.bottomContainer]}>
        <TouchableOpacity style={[styles.buttonStyles,{alignSelf:"center"}]} onPress={()=>{
          Alert.alert("Thông báo",`Đây là text input : ${textInput}`)
          }}>
          <Text style={{color:"white"}}>Button</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
export default App;
