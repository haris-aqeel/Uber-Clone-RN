import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const MapScreen = () => {
  return (
    <View>
      <GooglePlacesAutocomplete
        placeholder='Search'
        nearbyPlacesAPI='GooglePlacesSearch'
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: '123',
          language: 'en',
        }}
      />
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})