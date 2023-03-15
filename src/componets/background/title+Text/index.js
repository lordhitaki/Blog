import React from "react"
import { View, 
         Text, 
         } from "react-native"
import styles from "./styles"

export default function Titulo(){
    return(
        <View style={styles.backTitle}>
            <Text style={styles.title}>
                Welcome Back
            </Text>
            <Text style={styles.subTitle}>
                Sign in with your account
            </Text>

        </View>
            
      
    )
}