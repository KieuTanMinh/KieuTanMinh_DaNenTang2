import React, { useCallback, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native';

const colors = ['white', 'gray', 'red', 'blue', 'orange', 'yellow'];
interface BodyProps {
  onUpdateHeader: (text: string) => void;
  onUpdateFooter: (text: string) => void;
  bodyColor: string; // Màu của phần thân
  onUpdateColor: (text: string) => void;
}

const Body: React.FC<BodyProps> = ({ onUpdateHeader, onUpdateFooter, bodyColor }) => {
  const [text1, setText1] = useState('');
  const [text2, setText2] = useState('');
  const [bodyColors, setBodyColor] = useState(colors[0]);
  

  const handleTextChange1 = (text: string) => {
    setText1(text);

  };

  const handleTextChange2 = (text: string) => {
    setText2(text);
  };


  const handleRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomNumber];
    setBodyColor(randomColor);
  };

  const handleButtonClick = () => {
    onUpdateFooter(text2);
    onUpdateHeader(text2);
  };

  return (
    <View style={[styles.container, { backgroundColor: bodyColor }]}>
      <TextInput
        style={styles.input}
        placeholder="Nhập Tên"
        onChangeText={handleTextChange1}
        value={text1}
      />
      <TextInput
        style={styles.input}
        placeholder="Nhập Địa chỉ"
        onChangeText={handleTextChange2}
        value={text2}
      />
      <TouchableOpacity onPress={handleButtonClick} style={styles.button}>
        <Text style={styles.buttonText}>Click Me</Text>
      </TouchableOpacity>
    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  input: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: 'lightgrey',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'lightblue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Body;
