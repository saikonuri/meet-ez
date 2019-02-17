import React from 'react';
import { Platform, StatusBar, StyleSheet, View, Text, Button } from 'react-native';
import { AppLoading, Asset, Font, Icon, Google, AuthSession } from 'expo';

const apiKey = 'AIzaSyCCU1JbRgNKl2q1_f8V9zPaUj9EW_ZNBSw';
const IOS_CLIENT_ID = "209498689625-4v4g1fqfm42gpdpj8jp2hbuhu57c87m3.apps.googleusercontent.com";
const CLIENT_SECRET = "LGyjUPjeUIT69HowjElnZJGZ";

export default class LogIn extends React.Component {
    constructor(props) {
        super(props);
    }

    async logIn() {
        try {
            const result = await Expo.Google.logInAsync({
                clientId: IOS_CLIENT_ID,
                scopes: ["https://www.googleapis.com/auth/calendar.events", "email", "profile"]
            })

            if (result.type === "success") {
                this.props.loginSuccess(result);
            } else {
                console.log("cancelled");
            }

        } catch (e) {
            console.log("error", e);
        }
    }

    render() {
        return (
            <View>
                <Text style={styles.header}>Sign In With Google</Text>
                <Button title="Sign in with Google"
                    onPress={() => this.logIn()} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center"
    },
    header: {
      fontSize: 25
    },
    image: {
      marginTop: 15,
      width: 150,
      height: 150,
      borderColor: "rgba(0,0,0,0.2)",
      borderWidth: 3,
      borderRadius: 150
    }
  })

