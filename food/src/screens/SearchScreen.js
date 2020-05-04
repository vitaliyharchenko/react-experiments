import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import ResultsList from '../components/ResultsList.js';
import useResults from '../hooks/useResults';


const SearchScreen = () => {
	const [term, setTerm] = useState('');
	const [searchApi, results, errorMessage] = useResults();

	const filterByPrice = (price) => {
		return results.filter(result => {
			return result.price === price;
		});
	};

	return (
		<>
			<SearchBar
                term={term}
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            {errorMessage ? <Text>{ errorMessage }</Text> : null}
			<ScrollView>
				<ResultsList
					results={filterByPrice("$")}
					title="Cost Effective"
				/>
				<ResultsList
					results={filterByPrice("$$")}
					title="Cost Normal"
				/>
				<ResultsList
					results={filterByPrice("$$$")}
					title="Cost Pricy"
				/>
			</ScrollView>
		</>
	);
};

const styles = StyleSheet.create({});

export default SearchScreen;