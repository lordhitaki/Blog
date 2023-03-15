import React from "react"
import { View, 
         Text, 
         } from "react-native"
import styles from "./styles"

import Titulo from "./title+Text"
import InputUser from "./inputUsername"
import Botao from "./button"

export default function BackgroudMain(){
    return(
    <View style={styles.backgroud}>
        <View>
            <Titulo/>
        </View>
        <View>
            <InputUser/>
        </View>
        <View>
        <Botao/>    
        </View>    
    </View>

    )
}