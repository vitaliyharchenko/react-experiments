import React from 'react';
import { View , Text, StyleSheet, TextInput } from 'react-native';

const BoxScreen = () => {

	return (
		<View>
			<View style={styles.viewUpStyle}>
				<View style={styles.view1Style}></View>
				<View style={styles.view2Style}></View>
			</View>
			<View style={styles.viewDownStyle}>
				<View style={styles.view3Style}></View>
			</View>
		</View>
	)
};

const styles = StyleSheet.create({
	viewUpStyle: {
		borderWidth: 1,
		borderColor: 'black',
		flexDirection: 'row',
		justifyContent: 'space-between'
	},
	viewDownStyle: {
		borderWidth: 1,
		borderColor: 'black',
		flexDirection: 'row',
		justifyContent: 'center'
	},
	view1Style: {
		borderWidth: 3,
		borderColor: 'red',
		height: 100,
		width: 100
	},
	view2Style: {
		borderWidth: 3,
		borderColor: 'blue',
		height: 100,
		width: 100	
	},
	view3Style: {
		borderWidth: 3,
		borderColor: 'green',
		height: 100,
		width: 100	
	}
});

export default BoxScreen;