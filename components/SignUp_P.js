import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, View, Image, Pressable, Linking, KeyboardAvoidingView, Text, TextInput, TouchableOpacity, Button } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import signin from './SignIn_P';


export default class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            confirmpassword: '',
            check_textInputChange: false,
            secureTextEntry: true,
            secureTextEntry: true,
            secureTextEntry_ConfirmPass: true,
            
        };
    }

    RegDataInDB = () => {
        var First_Name = this.state.first_name;
        var Last_Name = this.state.last_name;
        var Email = this.state.email;
        var Password = this.state.password;
        var ConfirmPassword = this.state.confirmpassword;


        if ((Email.length == 0) || (Password.length == 0) || (ConfirmPassword.length == 0) || (First_Name.length == 0) || (Last_Name.length == 0))
        {
            alert("Required Field Is Missing!");
        } else if (Password !== ConfirmPassword) {
            alert("Password does not match!");
        } else if (Password.length < 8) {
            alert("Minimum 08 characters required!!!");
        }


        else {
            var Data = {
                First_Name: First_Name,
                Last_Name: Last_Name,
                Email: Email,
                Password: Password
            };

            var headers = {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            };

            fetch("http://192.168.0.5/aplikacja_baza/SingUp.php", {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(Data) 
            })
                .then((Response) => Response.json())
                .then((Response) => {
                    alert(Response[0].Message)
                    if (Response[0].Message == "Registered successfuly!") {
                        this.props.navigation.navigate("HomePage");
                    }
                })
                .catch((error) => {
                    console.error("ERROR:" + error);
                })
        }
    }


    render() {
        return (
            <View style={styles1.AppStyle}>

                <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Image source={require('./images/logo.png')}
                        style={styles1.logo}
                    />
                </View>
                
                <View paddingBottom={50}>
                
                
                <TouchableOpacity 
                        onPress={() => { this.props.navigation.navigate("SignIn") }}>
                            <FontAwesome5 
                        name="arrow-left"
                        size={25}
                        color="white"
                       
                        />
                        </TouchableOpacity>
                <Text style={styles1.chapter}>
                    Create a Account
                </Text>
                
                </View>
                
                <View>
                    <Text style={styles1.text}>
                        Name
                    </Text>
                </View>
              
                <View style={styles1.TextInView}>
                    
                    <TextInput
                        //placeholder="Enter Name"
                        style={styles1.textInput}
                        onChangeText={first_name => this.setState({ first_name })}
                    />
                </View>
                <View>
                    <Text style={styles1.text}>
                        Last Name
                    </Text>
                </View>
                <View style={styles1.TextInView}>
                    <TextInput
                       // placeholder="Enter Last Name"
                        style={styles1.textInput}
                        onChangeText={last_name => this.setState({ last_name })}
                    />
                </View>
                <View>
                    <Text style={styles1.text}>
                        Email
                    </Text>
                </View>
                <View style={styles1.TextInView}>
                    <TextInput
                        //placeholder="Enter Email"
                        style={styles1.textInput}
                        onChangeText={email => this.setState({ email })}
                    />
                </View>
                <View>
                    <Text style={styles1.text}>
                        Passowrd
                    </Text>
                </View>
                <View style={styles1.TextInView}>
                    <TextInput
                       // placeholder="Enter Password"
                        secureTextEntry={this.state.secureTextEntry ? true : false}
                        style={styles1.textInput}
                        onChangeText={password => this.setState({ password })}
                    />
                    <TouchableOpacity
                        onPress={() => this.setState({ secureTextEntry: !this.state.secureTextEntry })}>
                        <FontAwesome5 name={this.state.secureTextEntry  ? "lock" : "unlock"} size={27}/>
                    </TouchableOpacity>
                    
                </View>
                <View>
                    <Text style={styles1.text}>
                        Password Again
                    </Text>
                </View>
                <View style={styles1.TextInView}>
                    <TextInput
                        //placeholder="Confirm Password"
                        style={styles1.textInput}
                        onChangeText={confirmpassword => this.setState({ confirmpassword })}
                        secureTextEntry={this.state.secureTextEntry_ConfirmPass ? true : false}
                    />
                    <TouchableOpacity
                        onPress={() => this.setState({ secureTextEntry_ConfirmPass: !this.state.secureTextEntry_ConfirmPass })}>
                        <FontAwesome5 name={this.state.secureTextEntry_ConfirmPass  ? "lock" : "unlock"} size={27}/>
                    </TouchableOpacity>

                    

                    
                </View>


                <View style={styles1.ButtonView}>
                    <Pressable
                        style={styles1.Button}
                        onPress={() => { this.RegDataInDB() }}
                    >
                        <Text style={styles1.text}>Sign Up</Text>
                    </Pressable>
                </View>
                </KeyboardAwareScrollView>
            </View>
            
        );
    }
}

//style section
const styles1 = StyleSheet.create({
    container: {
         flex: 1,
        justifyContent: 'center',
        

    },

    logo:
    {
        alignSelf: 'center',
        width: 200,
        height: 200,
    },
    chapter:
    {
        
        color: '#ffffff',
        fontStyle: 'lucida grande',
        paddingLeft: 30,
        
        fontSize: 18,
        lineHeight: 21,
        fontWeight: 'bold',
        position: 'absolute',
        top: 3,
        

        
    },
    text: 
    {
        color: '#ffffff',
        fontSize: 16,
        //lineHeight: 21,
        //fontWeight: 'bold',
        padding: 10,
    },
    TextInView: {
        paddingRight: 7,
        borderRadius: 25,
        flexDirection: 'row',
        marginTop: 5,
        width: '95%',
        padding: 1,
        backgroundColor: 'white',
    },
    textInput: {
        marginLeft: 10,
        //top: 10,
        flex: 1,
        height: 30,
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

    stretch1: {
        justifyContent: 'center',
        alignItems: 'center',
    },

    stretch2: {
        width: 400,
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

    AppBar1: {
        //flex: 1,
        //appen: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        //textcolor: 'red',
        //alignItems:'center',
        justifyContent: 'center',
        backgroundColor: 'pink',
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

    Iconn: {
        margin: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    AppStyle: {
        flex: 1,
        padding: 20,
        //marginTop: 6,
        //paddingBottom: 3,
        //width: '100%',
        backgroundColor:'#4D426D' 

    },



    ButtonView: {
        marginTop: 10,
        alignItems: 'center'
    },

    Button: {
        borderRadius: 100,
        //marginTop: 30,
        //marginBottom: 20,
        //padding: 10,
        //borderRadius: 100,
        height: 50,
        backgroundColor: '#EFA985',
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        width: 204,
        
    },

})  
