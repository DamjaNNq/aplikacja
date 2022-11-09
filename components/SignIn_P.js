import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View, Image, Pressable, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';




export default class signin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            secureTextEntry: true,
        };
    }



    //code to send/reciev data with php to backend
    RegDataInDB = () => {
        var Email = this.state.email;
        var Password = this.state.password;

        if ((Email.length == 0) || (Password.length == 0)) {
            alert("Required Field Is Missing!");
        } else {

            var Data = {
                Email: Email,
                Password: Password
            };

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            fetch("http://192.168.0.5/aplikacja_baza/LoginP.php", {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Data)
            })
                .then((Response) => Response.json())
                .then((Response) => {
                    alert(Response[0].Message)
                    if (Response[0].Message == "Logged In Successfully") {
                        this.props.navigation.navigate("HomePage");
                    }
                })
                .catch((error) => { console.error("ERROR:" + error); })
        }
    }

    //app layout
    render() {
        return (

            <View style={styles1.AppStyle}>

 

                <View>
                    <Image source={require('./images/logo.png')}
                        style={styles1.logo}
                    />
                    
                </View>

                <View>
                    <Text style={styles1.signin}>
                        Sign In To Your Account
                    </Text>
                </View>

                <View style={styles1.user}>
                    <Text style={styles1.username}>
                        Email
                    </Text>
                </View>

                <View style={styles1.TextInView}>
                    <TextInput
                        style={styles1.textInput}
                        onChangeText={email => this.setState({ email })}
                    />
                </View>

                <View>
                    <Text style={styles1.username}>
                        Password
                    </Text>
                </View>
                <View style={styles1.TextInView}>

                    <TextInput
                        style={styles1.textInput}
                        secureTextEntry={this.state.secureTextEntry ? true : false}
                        onChangeText={password => this.setState({ password })}
                        
                    />
                    <Feather name={true ? "eye-off" : "eye"} size={30}
                        style={{ width: 30, height:30, }}
                    />
                    <TouchableOpacity
                        onPress={() => this.setState({ secureTextEntry: !this.state.secureTextEntry })}>
                       
                    </TouchableOpacity>
                    
                </View>


                <View style={styles1.ButtonView}>
                    <Pressable
                        style={styles1.Button}
                        onPress={() => { this.RegDataInDB() }}
                    >
                        <Text style={styles1.text}>Sign In</Text>
                    </Pressable>

                </View>

                <View style={styles1.ButtonView}>
                    <Pressable
                        style={styles1.Button}
                        onPress={() => { this.props.navigation.navigate("SignUp") }}
                    >
                        <Text style={styles1.text}>Sign Up</Text>
                    </Pressable>

                </View>



            </View>
        );
    }
}



//style section
const styles1 = StyleSheet.create({
    container: {
        //flex: 1,
        //justifyContent: 'center',
        backgroundColor:'#b803ff',
       
    },

    logo:
    {
        alignSelf: 'center',
        width: 250,
        height: 250,
    },
    signin:
    {
        
        color: '#ffffff',
        fontStyle: 'Inter', //czcionka do zmiany
        paddingBottom: 100,
        fontSize: 20,

        
    },
    username:
    {
        color: '#ffffff',
        fontStyle: 'lucida grande',
        fontSize: 18,
        



    },
    textInput: {
        
        top: 10,
        flex: 1,
        height: 40,
        marginBottom: 20,
        fontSize: 20,
        //borderBottomColor: 'grey',
        



    },
    buttonContainer: {
        margin: 20
    },

    multiButtonContainer: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    stretch: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 700,
        height: 200,
        margin: 10,
        resizeMode: 'stretch',
    },



    stretch2: {
        width: 20,
        height: 160,
        margin: 10,
        resizeMode: 'stretch',
    },

    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    TextInView: {
        borderRadius: 100,
        flexDirection: 'row',
        marginTop: 6,
        paddingBottom: 3,
        width: '95%',
        padding: 1,
        backgroundColor: 'white',


    },

    text: {
        color: 'white',
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
    },

    AppBar1: {
        //flex: 1,
        //appen: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //textcolor: 'red',
        //alignItems:'center',
        //justifyContent: 'center',
        //backgroundColor: 'pink',
        //color: 'red',
        //fontSize: 26 ,

    },

    AppBar2: {
        //flex: 1,
        margin: 5,
        padding: 1,
        alignItems: 'center',
        //fontWeights: 'bold',
        justifyContent: 'center',
        fontSize: 15,
        //backgroundColor: 'pink',
        width: 300,
        height: 20,
    },

    AppBar3: {
        //flex: 1,
        margin: 5,
        padding: 1,
        alignItems: 'center',
        //fontWeights: 'bold',
        justifyContent: 'center',
        fontSize: 15,
        //backgroundColor: 'pink',
        width: 300,
        height: 20,
    },

    AppStyle: {
        flex: 1,
        padding: 40,

        paddingBottom: 3,
        backgroundColor:'#4D426D' //zmienic na obraz
    },



    ButtonView: {
        marginTop: 10,
        alignItems: 'center'
    },

    Button: {
        borderRadius: 100,
        //marginTop: 30,
        //marginBottom: 20,
        padding: 10,
        borderRadius: 100,
        height: 50,
        backgroundColor: '#EFA985',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 204,
        //width: 80,
    },

 

})  