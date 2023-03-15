import React from "react"
import { View, 
         Text, 
         TouchableOpacity
         } from "react-native"
import styles from "./styles"

export default function Botao(){
    return(
    <View>
        <TouchableOpacity
            style={styles.but}
            onPress={() =>{} }
            >
                <Text>LOGIN</Text>
            </TouchableOpacity>
    </View>

    )
}