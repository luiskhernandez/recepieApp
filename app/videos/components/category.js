import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Platform
} from 'react-native';

function Category(props) {
  return (
    <ImageBackground
    style={styles.wrapper}
    source={{
      uri: props.background_image
    }}
    >
    <Text style={styles.genre}>{props.genres[0]}</Text>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    width: 250,
    height: 100,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#efefef',
    alignItems: 'center',
    justifyContent: 'center',
  },
  genre: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    textShadowColor: 'rgba(0,0,0,.75)',
    textShadowOffset: {
      width: 2,
      height:2
    },
    ...Platform.select({
      ios: {
        textShadowRadius: 0,
      },
      android: {
        fontFamily: 'roboto',
        textShadowRadius: 5,
        elevation: 2,
      }
    })
  }
})

export default Category;
