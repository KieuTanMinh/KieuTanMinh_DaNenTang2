import React, {useCallback, useState} from "react";
import { Button, Text, View } from "react-native";
//  dinh nghia  thanh phan con
const ChildComponent = ({onClick})=>{
    return <button onClick={onClick}>Click me</button>
}
// dinh nghia phan cha

const ParaentComponent=()=>{
    const [count, setcount] = useState(0);
    const handClick = useCallback(()=> {
        setcount(count+1);

    },[count]);
    return(
        <View>
            <Text style={{fontWeight: "bold"}}>CountL {count}</Text>
            <ChildComponent onClick={handClick}/>
        </View>
    );
}

export default ParaentComponent;