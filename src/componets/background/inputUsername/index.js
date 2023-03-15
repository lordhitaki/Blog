import React from "react"
import { View, 
         Text,
         TextInput
         } from "react-native"
import styles from "./styles"


export default function InputUser(){
    return(
    <View style={styles.boxInput}>
        <View >
            <Text style={styles.user}>
            Username
            </Text>
        </View>   
        <View> 
            <TextInput
            style={styles.inputuser}
            placeholder="EX... user@email.com"/>
        </View>
        <View>
            <Text style={styles.password}>
            Password
            </Text>
        </View>
        <View>
            <TextInput
            style={styles.inputs}
            placeholder=""/>
       </View>
    </View>
    )
}