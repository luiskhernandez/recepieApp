import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView
} from 'react-native'

function Header(props) {
  return (
    <View>
      <SafeAreaView>
       <View style={styles.container}>
        <Image
           source={require('app/assets/chef.png')}
           style={styles.logo}
         />
         <View style={styles.right}>
           {props.children}
         </View>
       </View>
      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row'
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain'
  },
  right: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }
})
export default Header;
