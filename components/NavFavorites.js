import { StyleSheet, Text, TouchableOpacity, View, FlatList } from 'react-native'
import React from 'react'

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
    }
]

const NavFavorites = () => {
  return (
    <FlatList 
        data={data}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
            <TouchableOpacity>
                <Text>YO</Text>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavFavorites

const styles = StyleSheet.create({})