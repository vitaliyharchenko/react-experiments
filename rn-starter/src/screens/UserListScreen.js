import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import UserDetail from "../components/UserDetail";

const UserListScreen = () => {
	const friends = [
		{ age: 20, name: "Vasya"},
		{ age: 30, name: "Petya" },
		{ age: 48, name: "Maxim" },
		{ age: 12, name: "Dima" },
		{ age: 34, name: "Sascha" },
		{ age: 24, name: "Masha" },
		{ age: 34, name: "Sanya" },
		{ age: 34, name: "Max" }
	]

	return (
		<FlatList
			keyExtractor={(friend) => friend.name}
			data={friends}
			renderItem={({item}) => {
				return (
					<UserDetail name={item.name} />
				)
			}}
		/>
	);
};

const styles = StyleSheet.create({
	textStyle: {
		marginVertical: 50
	}
});

export default UserListScreen;