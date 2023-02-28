import React from "react";
import {View,Text, ScrollView} from "react-native";
import {axiosInstance} from "../../utils";

function Feed({user}){
    const [photos, setPhotos] = React.useState([]);

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
                Feed
                {`/${user.username}/feed.json?user_email=${user.email}&user_token=${user.authentication_token}`}
            </Text>
            <ScrollView>
                {
                    photos.map((photo) => {
                        return (
                            <View> 
                                <Text>
                                    a photo
                                </Text>
                            </View>
                        )    

                    })
                }
            </ScrollView>
        </View>
    )
}

export default Feed;