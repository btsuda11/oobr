import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';

const data = [
    {
        id: '123',
        icon: 'home',
        location: 'Home',
        destination: 'Chino, CA, USA'
    },
    {
        id: '456',
        icon: 'briefcase',
        location: 'Work',
        destination: 'San Francisco, CA, USA'
    },
    {
        id: '789',
        icon: 'barbell-outline',
        location: 'Gym',
        destination: 'FITNESS SF - Fillmore, Fillmore Street, SF, CA, USA'
    }
]

const NavFavorites = ({ originRef, destinationRef }) => {
  return (
    <FlatList 
        data={data}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={() => {
            <View 
                style={[tw `bg-gray-200`, { height: 0.5 }]}
            />
        }}
        renderItem={({ item: { location, destination, icon } }) => (
            <TouchableOpacity style={tw `flex-row items-center p-5`}
                onPress={() => {
                    originRef ? originRef.current.setAddressText(destination) : destinationRef.current.setAddressText(destination);
                }}
            >
                <Icon 
                    style={tw `mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type='ionicon'
                    color='white'
                    size={18}
                />
                <View>
                    <Text style={tw `font-semibold text-lg`}>{location}</Text>
                    <Text style={tw `text-gray-500`}>{destination}</Text>
                </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavFavorites

const styles = StyleSheet.create({})