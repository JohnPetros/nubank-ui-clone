import { View, Text, Animated } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';

export default function Main({ translateY }) {
  return (
    <View style={styles.container}>
      <Animated.ScrollView
        style={{
          transform: [
            {
              translateY: translateY.interpolate({
                inputRange: [0, 360],
                outputRange: [1, 30],
                extrapolate: 'clamp',
              }),
            },
          ],
          opacity: translateY.interpolate({
            inputRange: [0, 360],
            outputRange: [1, 0.3],
            extrapolate: 'clamp',
          }),
        }}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingLeft: 10,
          paddingRight: 20,
        }}>
        <View style={styles.tabItem}>
          <Icon name="person-add" size={24} color="#fff" />
          <Text style={styles.tabText}>Indicar amigos</Text>
        </View>
        <View style={styles.tabItem}>
          <Icon name="chat-bubble-outline" size={24} color="#fff" />
          <Text style={styles.tabText}>Cobrar</Text>
        </View>
        <View style={styles.tabItem}>
          <Icon name="arrow-downward" size={24} color="#fff" />
          <Text style={styles.tabText}>Depositar</Text>
        </View>
        <View style={styles.tabItem}>
          <Icon name="arrow-upward" size={24} color="#fff" />
          <Text style={styles.tabText}>Transferir</Text>
        </View>
        <View style={styles.tabItem}>
          <Icon name="lock" size={24} color="#fff" />
          <Text style={styles.tabText}>Bloquear cartão</Text>
        </View>
      </Animated.ScrollView>
    </View>
  );
}
