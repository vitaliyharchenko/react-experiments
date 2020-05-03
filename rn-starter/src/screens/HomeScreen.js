import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
	return (
		<View>
			<Text style={styles.text}>Piece of text!</Text>
			<Button
				title="Go to components demo!"
				onPress={() => navigation.navigate('Components')}
			/>
			<Button
				title="Пользователи"
				onPress={() => navigation.navigate('UserList')}
			/>
			<Button
				title="Counter"
				onPress={() => navigation.navigate('Counter')}
			/>
			<Button
				title="Color"
				onPress={() => navigation.navigate('Color')}
			/>
			<Button
				title="Square"
				onPress={() => navigation.navigate('Square')}
			/>
			<Button
				title="Input"
				onPress={() => navigation.navigate('Input')}
			/>
			<Button
				title="BoxScreen"
				onPress={() => navigation.navigate('Box')}
			/>
			{/*<TouchableOpacity onPress={() => props.navigation.navigate('List')}>
				<Text>Go to List Demo</Text>
			</TouchableOpacity>*/}
		</View>
	)
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;
