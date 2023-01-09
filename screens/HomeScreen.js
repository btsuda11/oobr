import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={tw `p-5`}>
        <Image 
            style={{
                width: 100, height: 100, resizeMode: 'contain'
            }}
            source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
            }}
        />
        {/* <View style={tw `flex-1`}> */}

        <GooglePlacesAutocomplete 
          styles={{
            container: {
              flex: 0
            },
            textInput: {
              fontSize: 18
            },
            listView: {
              zIndex: 10
            }
          }}
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en'
          }}
          placeholder='Where From?'
          nearbyPlacesAPI='GooglePlacesSearch'
          debounce={400}
        />
        {/* </View> */}
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue'
    }
})