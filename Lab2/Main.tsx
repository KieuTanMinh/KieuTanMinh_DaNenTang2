import React, { useCallback, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
 const colors = ['gray', 'white', 'red', 'blue', 'orange', 'yellow'];

const Main: React.FC = () => {
  const [headerText, setHeaderText] = useState('');
  const [footerText, setFooterText] = useState('');
  const [footerColor, setFooterColor] = useState(colors[0]);
  const [bodyColor, setBodyColor] = useState(colors[1]);

  const handleUpdateHeader = (text: string) => {
    setHeaderText(text);
  };


  const handleUpdateFooter = (text: string) => {
    setFooterText(text);
  };
  const handleRandomColor = () => {
    const randomNumber = Math.floor(Math.random() * colors.length);
    const randomColor = colors[randomNumber];
    setBodyColor(randomColor);
  };


  const handleButtonClick = () => {
    setFooterColor('blue');
  };

  return (
    <View style={styles.container}>
      <Header headerText={headerText} />
      <Body onUpdateColor={handleRandomColor}  bodyColor={bodyColor} onUpdateHeader={handleUpdateHeader}  onUpdateFooter={handleUpdateFooter} />
      <TouchableOpacity onPress={handleRandomColor} style={{ backgroundColor: 'lightyellow',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, alignItems: 'center', height: 50,}}>
        <Text style={styles.buttonText}>Random</Text>
      </TouchableOpacity>
      <Footer  footerText={footerText} color={footerColor} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
});

export default Main;
