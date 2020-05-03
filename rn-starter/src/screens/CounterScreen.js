import React, { useReducer } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const reducer = (state, action) => {
	switch (action.type) {
		case 'increase':
			return { ...state, count: state.count + action.payload };
		case 'decrease':
			return { ...state, count: state.count - action.payload };
		default:
			return state
	}
}

const CounterScreen = () => {
	const [state, dispatch] = useReducer(reducer, { count: 0 });

	return (
		<View>
			<Text>Counter is: {state.count}</Text>
			<Button title="Increase (+)" onPress={() => {
				dispatch({ type: 'increase', payload: 1 })
			}}/>
			<Button title="Decrease (-)" onPress={() => {
				dispatch({ type: 'decrease', payload: 1 })
			}}/>
		</View>
	);
};

const styles = StyleSheet.create({

});

export default CounterScreen;