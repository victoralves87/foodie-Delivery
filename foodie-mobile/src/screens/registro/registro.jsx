import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./registro-style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx"

function Registro(props){
    return  <>
     
    <View style={styles.container}>
       <ScrollView style={styles.ScrollView}>
                <Header texto="Criar sua conta"></Header>

            <View style={styles.formGroup}>  
            <View >
                <TextBox label="Nome Completo:"/>
            </View>  
            <View style={styles.form}>
                <TextBox label="E-mail:"/>
            </View>
            <View style={styles.form}>
                <TextBox label="Senha:" isPassword={true}/>
            </View>
            <View style={styles.form}>
                <TextBox label="Confirme sua Senha:" isPassword={true}/>
            </View>
            <View style={styles.form2}>
                <Button texto="Proximo passo" onPress={() => props.navigation.navigate("registro2")}/>
            </View>
        </View>
        </ScrollView>
    </View>
    
    </>
}

export default Registro;