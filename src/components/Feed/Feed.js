import React from "react";
import {View,Text, ScrollView, StyleSheet, FlatList} from "react-native";
import {axiosInstance} from "../../utils";

function Photo({ photo }) {
    return (
        <View>
            <Text>{photo.image}</Text>
        </View>
    )
}

function Feed({user}){
    const [photos, setPhotos] = React.useState([]);

    function ListHeader() {
        return (
            <Text style={styles.title}>feed</Text>
        )
    }

    async function getFeed() {
        try {
            const apiEndPoint = `/${user.username}/feed.json?user_email=${user.email}&user_token=${user.authentication_token}`
            const response = await axiosInstance.get(apiEndPoint)
            setPhotos(response.data);
        } catch(error) {
            console.log(error)
        }
    }

    React.useEffect(() => {
        getFeed()
    },[])

    return (
        <View>
            <Text>
                feed
            </Text>
            <Text>
                post by people you follow
            </Text>
            <ScrollView>
                {
                    photos.map((photo) => {
                        return (
                            <Photo photo={photo} key={photo.id} />
                        )    

                    })
                }
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28, 
        fontWeight: '600'
    },
    contentContainer: {
        padding: 12
    }
})


export default Feed;