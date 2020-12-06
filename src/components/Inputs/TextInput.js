import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const TextInputComponent = ({ name, onChange,touched,  value, placeholder, customStyles, error, handleBlur }) => {
    const [isFocused, setIsFocused] = useState(value ? true : false);
    return (
        <>
            <TextInput
                name={name}
                placeholder={placeholder}
                defaultValue={value}
                onChangeText={(text) => {
                    if (text.length > 0) {
                        setIsFocused(true);
                    } else {
                        setIsFocused(false);
                    }
                    onChange(text);
                }}
                onBlur={handleBlur}
            />
            {touched && error && <Text style={styles.errorInput}>{error}</Text>}
        </>
    );
};
const styles = StyleSheet.create({
    errorInput: {
        color: "red",
    }
});

export default TextInputComponent;
