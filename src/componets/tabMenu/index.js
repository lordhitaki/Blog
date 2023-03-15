import React from "react"
import { View, 
         Text, 
         } from "react-native"
import styles from "./styles"

export default function TabMenu(){
    return(
        <View style={styles.tab}>
            <View>
                <Text style={styles.textTabLeft}>LOGIN</Text>
            </View>
            <View>
                <Text style={styles.textTabRight}>SIGN UP</Text>
            </View>
            
        </View>
            
      
    )
}