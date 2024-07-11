import { Text, TouchableOpacity } from "react-native";
import { styles } from "./button-style.js";

function Button(){
    return <TouchableOpacity style={styles.btn}>
            <Text style={styles.texto}> isso é um botão</Text>
        </TouchableOpacity>

}

export default Button;