import { Image, ImageBase, Text } from 'react-native';
import icons from './src/constants/icons.js';
import { styles } from './style.js';

export default function App() {
  const nome = "Victor"

  return (<>
      <Text>Oii {nome}!</Text>
      <Image style={styles.imagem} source={icons.remove} />
      </>
  );
}

