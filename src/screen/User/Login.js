import React, { Component } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Modal } from 'react-native';



const Data = {
    Username: 'wanat', Password: '12345'
}


export default class LoginScreen extends Component {

    constructor() {
        super()
        this.state = {
            isLoggedIn: true,
            NumberX: 0,
            username: '',
            password: '',
            modalVisible: false,
            TextModal: '',

        }
    }
    static navigationOptions = {
        header: null
      };

    Navigates = () => {

        console.log("สวัสดี")

        this.setState({ modalVisible: false }, console.log(this.state.modalVisible))
        this.props.navigation.navigate('Gate')
    }  

    ChangeModal = () => {

        if (!this.state.modalVisible) {
            this.setState({ modalVisible: true })
            if (!this.state.username) {
                this.setState({ TextModal: 'กรุณาใส่ Username' })
            } else {
                if (!this.state.password) {
                    this.setState({ TextModal: 'กรุณาใส่ Password' })
                } else {
                    if (this.state.username == Data.Username) {
                        if (this.state.password == Data.Password) {

                            this.Navigates()
                            
                        } else {
                            this.setState({ TextModal: 'รหัสผ่านผิด' })
                        }
                    } else {
                        this.setState({ TextModal: 'ชื่อผู้ใช้ผิด' })
                    }
                }
            }
        }
        else {
            this.setState({ modalVisible: false })
        }
    }

    ShowView() {
        if (this.state.modalVisible) {
            return (
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.modalVisible}
                >
                    <View style={styles.ViewModal}>
                        <View style={styles.ViewTextModal}>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{color: "#FF5733", fontSize: 27}}>แจ้งเตือน !!</Text>
                                <Text style={{ marginTop: 20, marginBottom: 15 }}>{this.state.TextModal}</Text>
                            </View>

                            <TouchableOpacity onPress={this.ChangeModal}>
                                <View style={styles.ButtonModal}>
                                    <Text style={styles.buttonText}>OK</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                    </View>

                </Modal>
            )
        } else {
            return null;
        }

    }


    render() {
        //const {navigate} = this.props.navigation;
        return (

            <View style={styles.container}>
                {this.ShowView()}
                <View style={styles.loginContainer}>
                    <Text style={{ fontSize: 50, color: '#FF5733' }}>ฮันแน่!!</Text>
                </View>
                <View style={styles.formContainer}>
                    <TextInput style={styles.input}
                        placeholder='Username'
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        onChangeText={(value) => this.setState({ username: value })}
                        value={this.state.username}
                    />
                    <TextInput style={styles.input}
                        placeholder='Password'
                        placeholderTextColor='rgba(225,225,225,0.7)'
                        secureTextEntry
                        onChangeText={(value) => this.setState({ password: value })}
                        value={this.state.password}
                    />

                    <TouchableOpacity style={styles.buttonContainer} onPress={this.ChangeModal}>
                        <Text style={styles.buttonText}>LOGIN</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.TextFooter}>
                    <TouchableOpacity 
                        onPress={() => navigate('Register')}
                    >
                        <Text style={styles.TextFooterRegis}>Registration?</Text>
                    </TouchableOpacity>

                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
    },
    loginContainer: {
        alignItems: 'center',
        flexGrow: 0.5,
        justifyContent: 'center'
    },
    ViewStyle: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    ViewModal: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
    },
    TextFooter: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(225,225,225,0.2)',
        marginBottom: 10,
        padding: 10,
        color: '#fff'
    },
    buttonContainer: {
        backgroundColor: '#2980b6',
        paddingVertical: 15
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    TextFooterRegis: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700'
    },
    ButtonModal: {
        flexDirection: 'row',
        backgroundColor: '#2980b6',
        paddingLeft: 120,
        paddingRight: 120,
        paddingTop: 15,
        paddingBottom: 15,
        borderBottomWidth: null
    },
    ViewTextModal: {
        backgroundColor: "#F6F6F6",
        paddingTop: 10,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        borderBottomWidth: 0,
    },
});