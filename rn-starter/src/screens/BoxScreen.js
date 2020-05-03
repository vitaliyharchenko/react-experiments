import React from 'react';
import { View , Text, StyleSheet, TextInput } from 'react-native';

const BoxScreen = () => {

	return (
		<View style={styles.viewStyle}>
			<Text style={styles.textStyle}>Box1</Text>
			<Text style={styles.textStyle}>Box2</Text>
			<Text style={styles.textStyle}>Box3</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	viewStyle: {
		borderWidth: 1,
		borderColor: 'black',
		flexDirection: 'row',
		height: 200,
		justifyContent: 'center'
	},
	textStyle: {
		borderWidth: 3,
		borderColor: 'red'	
	}
});

export default BoxScreen;