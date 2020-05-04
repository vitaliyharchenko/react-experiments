import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ResultDetail = ({result}) => {
  return (
      <View style={styles.containerStyle}>
          <Image style={styles.imageStyle} source={{ uri: result.image_url }}/>
          <Text style={styles.nameStyle}>{result.name}</Text>
          <Text style={styles.descriptionStyle}>
              {result.rating} Stars
          </Text>
      </View>
  )
};

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: 15
    },
    imageStyle: {
        height: 120,
        width: 250,
        borderRadius: 4,
        marginBottom: 5
    },
    nameStyle: {
        fontWeight: 'bold',
        fontSize: 16
    },
    descriptionStyle: {
    }
});

export default ResultDetail;