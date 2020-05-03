import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const UserDetail = ({ name }) => {
	return (
		<View>
			<Image source={require("../../assets/avatars/avatar2.jpg")}/>
			<Text style={styles.textStyle}>{name}</Text>
		</View>
	)
};

const styles = StyleSheet.create({
	textStyle: {
		fontSize: 30
	}
});

export default UserDetail;