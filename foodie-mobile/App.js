import { Text } from 'react-native';
import { styles } from './style.js';
import Button from './src/components/button/button.jsx';



export default function App() {
  const nome = "Victor"

  return (<>
      <Text style={styles.texto}>Oii {nome}!</Text>
      <Button></Button>
      </>
  );
}

