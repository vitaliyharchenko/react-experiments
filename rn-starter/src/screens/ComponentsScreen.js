import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
	const username = "vitaliyharchenko";

	return (
		<View>
			<Text style={styles.headerStyle}>Hi, motherfucker!</Text>
			<Text style={styles.textStyle}>Hi, {username}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	headerStyle: {
		fontSize: 45
	},
	textStyle: {
		fontSize: 20
	}
});

export default ComponentsScreen;