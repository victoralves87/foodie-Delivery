import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./registro2-style.js";
import Header from "../../components/header/header.jsx";
import TextBox from "../../components/textbox/textbox.jsx";
import Button from "../../components/button/button.jsx"

function Registro2(){
    return  <>
     
    <View style={styles.container}>
       <ScrollView style={styles.ScrollView}>
                <Header texto="Informe seu endereço"></Header>

            <View style={styles.formGroup}>  
            <View style={styles.formHorizontal}>
                <View style={styles.form70}>
                    <TextBox label="Endereço:"/>
                </View>
                <View style={styles.form30}> 
                    <TextBox label="Complemento:"/>
                </View>        
            </View>  
            <View style={styles.form}>
                <TextBox label="Bairro:"/>
            </View>
            <View style={styles.formHorizontal}>
                <View style={styles.form70}>
                    <TextBox label="Cidade:"/>
                </View>
                <View style={styles.form30}> 
                    <TextBox label="UF:"/>
                </View>        
            </View> 
            <View style={styles.form}>
                <TextBox label="CEP:"/>
            </View>
            <View style={styles.form2}>
                <Button texto="Criar minha conta"></Button>
            </View>
        </View>
        </ScrollView>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Text style={styles.footerText}>Acessar minha Conta</Text>
                </TouchableOpacity>
            </View>
    </View>
    
    </>
}

export default Registro2;