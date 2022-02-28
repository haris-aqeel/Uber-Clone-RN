import { Text, View, FlatList, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import {Icon} from 'react-native-elements'
import tw from 'tailwind-react-native-classnames';



const data = [
    {
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen"
    },
    {
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen" // Change in future
    }
]

const NavOptions = ({navigation}) => {
    const availableWidth = Dimensions.get('window').width;
    const availableHeight = Dimensions.get('window').height;

    const renderItemCards = ({ item }) => {
        return (
            <TouchableOpacity
                onPress={() => {navigation.navigate(item.screen)}}
                style={tw`p-1 mx-1.5 mt-1 bg-gray-200 rounded-md`}
            >
                <View>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: availableWidth / 2.5, height: availableHeight / 6 }}
                        resizeMode="contain"

                    />
                    <Text style={tw`m-2 text-lg font-bold`}>{item.title}</Text>
                    <Icon 
                        style={tw`p-2 m-2 ml-2 bg-black rounded-full w-10`}
                        name="arrowright"
                        color="white"
                        type="antdesign"
                        
                    />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={tw`items-center`}>
            <FlatList
                data={data}
                horizontal
                renderItem={renderItemCards}
                keyExtractor={item => item.id}
            />
        </View>
    )
}

export default NavOptions