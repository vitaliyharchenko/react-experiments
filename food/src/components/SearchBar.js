import React from 'react';
import {View, Text, StyleSheet, TextInput} from 'react-native';
import {Feather} from '@expo/vector-icons';

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
    return (
        <View style={styles.backgroundStyle}>
            <Feather style={styles.iconStyle} name="search"/>
            <TextInput
                style={styles.inputStyle}
                placeholder="Search..."
                value={term}
                onChangeText={newTerm => onTermChange(newTerm)}
                autoCapitalize="none"
                autoCorrect={false}
                onEndEditing={() => onTermSubmit()}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    backgroundStyle: {
        backgroundColor: '#FFFFFF',
        height: 50,
        marginHorizontal: 15,
        borderRadius: 5,
        flexDirection: "row",
        marginTop: 10,
        marginBottom: 10
    },
    iconStyle: {
        fontSize: 35,
        alignSelf: "center",
        marginHorizontal: 10
    },
    inputStyle: {
        flex: 1,
        fontSize: 18
    }
});

export default SearchBar;