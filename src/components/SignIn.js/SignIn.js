import React from "react";
import {View, Text, TextInput, StyleSheet, Button} from "react-native";
import { axiosInstance } from "../../utils";

function SignIn(){
    const [email,setEmail] = React.useState("");
    const [password,setPassword] = React.useState("");

    async function signInRequest(){
        try {
            const apiEndPoint = "/users/sign_in.json"
        
            const body = {
                user: {
                    email: email,
                    password: password
                }
            }

            const response = await axiosInstance.post(apiEndPoint, body);
            console.log(response.data);
        
        } catch (error) {
            console.error(error.toJSON());
        }
    }

    return(
        <View>
            <Text>Sign In!</Text>
            <TextInput
                style={styles.input}
                value={email}
                onChangeText={(change) => setEmail(change)}
                keyboardType={"email-address"}
                placeholder={"Email"}
                
            />
            <TextInput
                style={styles.input}
                value={password}
                onChangeText={(change) => setPassword(change)}
                placeholder={"Password"}
                secureTextEntry={true}
            />
            <Button
                title="Sign In!"
                color="#f194ff"
                onPress={signInRequest}
            />
        </View>

    )

}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
      },
      title: {
        textAlign: 'center',
        marginVertical: 8,
      },
      fixToText: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      separator: {
        marginVertical: 8,
        borderBottomColor: '#737373',
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
  });

export default SignIn;