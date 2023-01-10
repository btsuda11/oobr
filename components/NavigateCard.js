import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React, { useRef } from 'react';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import NavFavorites from './NavFavorites';

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const destinationRef = useRef(null);

  return (
    <SafeAreaView style={tw `flex-1 bg-white`}>
      <Text style={tw `text-center py-5 text-xl`}>Good Morning, Demo User</Text>
      <View style={tw `border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete 
                ref={destinationRef}
                placeholder='Where To?'
                styles={toInputBoxStyles}
                returnKeyType={'search'}
                onPress={(data, details = null) => {
                    dispatch(setDestination({
                        location: details.geometry.location,
                        description: data.description
                    }));

                    navigation.navigate('RideOptionsCard');
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                fetchDetails={true}
                enablePoweredByContainer={false}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language: 'en'
                }}
                debounce={400}
            />
        </View>
        <NavFavorites destinationRef={destinationRef} />
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        paddingTop: 20,
        flex: 0
    },
    textInput: {
        backgroundColor: '#DDDDDF',
        borderRadius: 0,
        fontSize: 18
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0
    }
})