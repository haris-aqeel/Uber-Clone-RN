import { SafeAreaView, Image, View, StyleSheet } from 'react-native'
import React from 'react'
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';


const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
      <View style={tw`p-5`}>
        <Image
            source={{uri: 'https://links.papareact.com/gzs'}}
            style={styles.uberLogo}
            resizeMode="contain"
        />
        <NavOptions navigation={navigation}/>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    uberLogo: {
        width: 100,
        height: 100
    }
})

export default HomeScreen