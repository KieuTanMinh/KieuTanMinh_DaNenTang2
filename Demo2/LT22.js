import { Button, StyleSheet, Text, View } from 'react-native'
import React, {useRef} from 'react'

const MyComponent = ()=> {
    const inputRef = useRef(null);
    const focusInput =()=>{
        inputRef.current.focus();
    }
    return(
        <View>
            <input ref={inputRef}/>
            <Button title='FOCUS INPUT' onPress={focusInput}/>
        </View>
    )
}

export default MyComponent