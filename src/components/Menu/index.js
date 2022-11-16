import { View, Text, TouchableOpacity, Animated } from 'react-native';

import QRCode from 'react-native-qrcode-svg';
import Icon from 'react-native-vector-icons/MaterialIcons';

import styles from './styles';

export default function Menu({ translateY }) {
  return (
    <Animated.ScrollView
      style={[
        styles.container,
        {
          opacity: translateY.interpolate({
            inputRange: [0, 150],
            outputRange: [0, 1],
          }),
        },
      ]}>
      <View style={styles.code}>
        <QRCode
          value="https://rockeatseat.com.br"
          size={80}
          backgroundColor="#8b10ae"
          color="#fff"
        />
      </View>

      <View style={styles.nav}>
        <View style={styles.navItem}>
          <Icon name="help-outline" size={20} color="#fff" />
          <Text style={styles.navText}>Me ajuda</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="person-outline" size={20} color="#fff" />
          <Text style={styles.navText}>Perfil</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="credit-outline" size={20} color="#fff" />
          <Text style={styles.navText}>Configurar cartão</Text>
        </View>
        <View style={styles.navItem}>
          <Icon name="smartphone" size={20} color="#fff" />
          <Text style={styles.navText}>Configurações do App</Text>
        </View>

        <TouchableOpacity style={styles.signOutButton} onPress={() => {}}>
          <Text style={styles.signOutButtonText}>SAIR DO APP</Text>
        </TouchableOpacity>
      </View>
    </Animated.ScrollView>
  );
}
