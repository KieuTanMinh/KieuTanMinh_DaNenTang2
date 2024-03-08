import React,{useState} from "react";
import { View,TextInput,Button,Text,StyleSheet } from "react-native";
const L13=()=>{
    const [inputValue,setInputValue]=useState('');
    const [isInputValid,setIsInputValid]=useState(true);
    const handleBlur=()=>{
        setIsInputValid(inputValue.trim() !=='');
    };
    const handleSubmit=()=>{
        setIsInputValid(inputValue.trim() !=='');
    };
    return(
        <View style={{padding: 10}}> 
            <TextInput
            style={{borderWidth: 1, top: 10}}
                placeholder="moi nhap lieu"
                onChangeText={text=>{
                    setInputValue(text);
                    setIsInputValid(true);
                }}
                onBlur={handleBlur}
            />
            
            <Text></Text>
            {!isInputValid && <Text>khong duoc de trong</Text>}
            <Button title="Submit" onPress={handleSubmit}/>
           
        </View>
    );
};
export default L13;