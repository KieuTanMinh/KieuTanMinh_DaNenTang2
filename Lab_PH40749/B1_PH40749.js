import React from "react";
import { Text,View,StyleSheet, Image } from "react-native";
const L11SectionView=({title,child,backgroundColor})=>{
    return(
        <View style={[styles.container,{backgroundColor,borderBottomWidth: 1 }]}>
           <View style={{top: 15, alignItems: 'center',}}>
           <Image style={{left: -150}} source={require('../img/previous.png')} />
            <Text style={{top: -30, fontSize: 20, }}>{title}</Text>
            {child}
           </View>
        </View>
    );
}
const B1_PH40749=()=>{
    return(
        <View style={styles.container}>
            <L11SectionView title="Header" backgroundColor="#fff">
                <Text>Day la header</Text>
            </L11SectionView>
            <L11SectionView   title="Trang chủ" backgroundColor="#fff">
                <Text>Day la content</Text>
            </L11SectionView>
            <L11SectionView title="" backgroundColor="#fff">
                <Text>Day la footer</Text>
            </L11SectionView>
        </View>
    );
}
const styles=StyleSheet.create({
    container:{
       
        height: 70,

    },
    title:{
        fontSize:30,
    },
});
export default B1_PH40749;