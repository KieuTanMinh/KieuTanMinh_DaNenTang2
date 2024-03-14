import { useEffect, useState } from "react";
import React,{useEffect, useState} from "react";
import { Button, Text, View } from "react-native";

const LT32 = ()=>{
    const [count, setCount]=useState(0);
    useEffect(()=>{
        // ham duoc hoi sau moi lan render
        console.log("Co thay doi gia tri");
    });

    return(
        <View>
            <Text>Count {count}</Text>
            <Button title="tang" onPress={()=> setCount(count+1)}/>
        </View>
    )
}
export default LT32;