import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class Write extends React.Component {
    render(){
        return(
            <View style = {styles.container}>
             <Header backgroundColor = {'#23DAF9'} centerComponent = {{text: 'Write a Story', style: {color: '#2A23F9', fontSize: 20}, }}/>

             <TextInput style = {styles.input} placeholder = "Title"/>
             <TextInput style = {styles.input} placeholder = "Author"/>
             <TextInput style = {styles.input} placeholder = "Write your story" multiline = {true}/>

             <TouchableOpacity style = {styles.goButton}><Text style = {styles.buttonText}>Submit</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
     container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
     },
     inputBox: {
        marginTop: 80,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        borderWidth: 4,
        textAlign: 'center'
     }, 
     goButton: {
        width: '50%',
        height: 55,
        alignSelf: 'center',
        padding: 10,
        margin: 10
     },
     buttonText: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 30,
     },
});
  