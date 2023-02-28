import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

function Photo({photo}) {

    return (
        <Text>{photo.caption}</Text>
    )
}

export default Photo;