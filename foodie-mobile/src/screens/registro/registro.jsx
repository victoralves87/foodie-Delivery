import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./registro-style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx"

function Registro(){
    return  <View style={styles.container}>
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
                <Button texto="Proximo passo"></Button>
            </View>
        </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.footerText}>Acessar minha Conta</Text>
                </TouchableOpacity>
            </View>
    </View>

}

export default Registro;