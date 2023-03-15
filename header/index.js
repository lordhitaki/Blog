import React from "react"
import { View, 
         Text, 
        Image } from "react-native"
import styles from "./styles"

export default function Logo1(){
    return(
        <View style={styles.logoBox}>
            <View>
                <Image
                source={require("../src/componets/img/LOGO_SMALL.png")}
                />
            </View>
        </View>
            
      
    )
}