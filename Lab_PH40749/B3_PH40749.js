import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Alert } from 'react-native';

const B3_PH40749 = () => {
  const [text, setText] = useState(''); // Đổi tex thành text
  const [error, setError] = useState('');
  const [isInputValid, setIsInputValid] = useState(true);
  const [inputValue, setInputValue] = useState('');

  const handleChangeText = (inputText) => {
    setInputValue(inputText); // Cập nhật giá trị của inputValue
    setIsInputValid(true); // Đặt lại isInputValid thành true
    // Kiểm tra điều kiện của input và cập nhật thông báo lỗi nếu cần
    // Ví dụ: Kiểm tra nếu inputText là rỗng
    if (inputText.trim() === '') {
      setError('Error message');
    } else {
      setError('');
    }
  };

  const handleSubmit = () => {
    setIsInputValid(inputValue.trim() !== ''); // Kiểm tra giá trị của inputValue
    if (inputValue.trim() === '') {
      // Hiển thị cảnh báo nếu có lỗi
      
    } else {
      // Xử lý logic khi không có lỗi
      // Ví dụ: Gửi dữ liệu, chuyển hướng, vv...
    }
  };

  return (
    <View>
      <Text style={{ marginBottom: 5 }}>Label text</Text>
      <TextInput
        value={inputValue} // Sử dụng inputValue thay vì text
        onChangeText={handleChangeText}
        style={{
          borderWidth: 1,
          borderColor: error ? 'red' : 'gray',
          padding: 10,
          marginBottom: 10,
        }}
      />
      {!isInputValid && <Text style={{ color: 'red' }}>Không được để trống</Text>}
      <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: 'blue', padding: 10, borderRadius: 5 }}>
        <Text style={{ color: 'white', textAlign: 'center' }}>Button</Text>
      </TouchableOpacity>
    </View>
  );
};

export default B3_PH40749;
