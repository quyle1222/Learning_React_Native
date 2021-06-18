
import React from "react";
import {Image,Text,View} from "react-native";

const Item_ScrollView=({title,uri})=>{
    return (
        <View style={{height:100,margin:20}}>
            <Text>{title}</Text>
            <Image
            style={{
                borderWidth:2,
                height:100,
                width:100
            }}
            source={{uri: `${uri}`}}></Image>
        </View>
    );
}
export default Item_ScrollView