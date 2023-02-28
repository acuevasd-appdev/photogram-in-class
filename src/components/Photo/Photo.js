import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Photo({photo}) {

    return (
        <View style={styles.photo}>
            <Text>owner</Text>

            <View>
                <Text>image</Text>   
            </View> 

            <View>
                <Text>likes</Text>   
            </View> 

            <Text style={styles.caption}>{photo.caption}</Text> 
        </View>
        
        
      
    )
}

const styles = StyleSheet.create({
    photo: {
        padding: 16,
        marginVertical: 8,
        borderWidth: 1,
        borderRadius: 8,
        borderColor: 'gainsboro',
        width: '100%'
    },
    imageWrapper: {
        height: 225,
        marginVertical: 12,
        marginLeft: -16,
        marginRight: -16,
    },
    image: {
        height: '100%',
        width: '100%',
    },
    username: {
        fontWeight: '700'
    },
    likes: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    likesCount: {
        marginLeft: 6,
    },
    caption: {
        marginTop: 12,
    }
})

export default Photo;