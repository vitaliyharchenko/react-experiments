import React, { useState } from 'react';
import { View , Text, StyleSheet, TextInput } from 'react-native';

const InputScreen = () => {
	const [password, setPassword] = useState('');

	return (
		<View>
			<Text>Enter password</Text>
			<TextInput
				style={styles.input}
				autoCapitalize="none"
				autoCorrect={false}
				value={password}
				onChangeText={(newValue) => setPassword(newValue)}
			/>
			{password.length < 8 ? <Text>Password should contain more than 8 characters</Text> : null}
		</View>
	)
};

const styles = StyleSheet.create({
	input: {
		margin: 15,
		borderColor: 'black',
		borderWidth: 1
	}
});

export default InputScreen;