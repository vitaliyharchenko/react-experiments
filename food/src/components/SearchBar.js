import React from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import { Feather } from '@expo/vector-icons'

const SearchBar = () => {
	return (
		<View style={styles.background}>
			<Feather name="search" size={40} />
			<TextInput />
			<Text>SearchBar</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	background: {
		backgroundColor: '#FFFFFF',
		height: 50,
		marginHorizontal: 15,
		borderRadius: 5
	}
});

export default SearchBar;