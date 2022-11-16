import { View, Text, Image } from 'react-native';

import Icon from "react-native-vector-icons/MaterialIcons"
import Logo from "../../assets/Nubank_Logo.png"

import styles from './styles';

export default function Header() {
  return (
  <View style={styles.container}>
    <View style={styles.top}>
      <Image source={Logo} />
      <Text style={styles.title}>João Pedro</Text>
    </View>
    <Icon name="keyboard-arrow-down" size={20} color="#fff" />
  </View>
  )
  
}
