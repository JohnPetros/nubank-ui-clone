import { View, Text, Animated } from 'react-native';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Header from '../../components/Header/index';
import Menu from '../../components/Menu/index';
import Tabs from '../../components/Tabs/index';

import styles from './styles';

export function Main() {
  let offset = 0;

  const translateY = new Animated.Value(0);

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let isOpen = false;
      const { translationY } = event.nativeEvent;

      offset += translateY;

      if (translationY >= 100) {
        isOpen = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

        Animated.timing(translateY, {
          toValue: isOpen ? 380 : 0,
          duration: 200,
          useNativeDriver: true,
        }).start(() => {
          offset = isOpen ? 300 : 0;
          translateY.setOffset(offset)
        });

      // translateY.setOffSet(offset);
      // translateY.setValue(offset);
    }
  }

  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Menu translateY={translateY} />

        <PanGestureHandler
          onGestureEvent={animatedEvent}
          onHandlerStateChange={onHandlerStateChange}>
          <Animated.View
            style={[
              styles.card,
              {
                transform: [
                  {
                    translateY: translateY.interpolate({
                      inputRange: [-350, 0, 360],
                      outputRange: [-50, 0, 360],
                      extrapolate: 'clamp',
                    }),
                  },
                ],
              },
            ]}>
            <View style={styles.cardHeader}>
              <Icon name="attach-money" size={28} color="#666" />
              <Icon name="visibility-off" size={28} color="#666" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.title}>Saldo disponível</Text>
              <Text style={styles.description}>R$ 197.611,65</Text>
            </View>
            <View style={styles.cardFooter}>
              <Text style={styles.annotation}>
                Transferência de R$ 20,00 recebida de Diego Schell Fernandos
                hoje às 06:00h
              </Text>
            </View>
          </Animated.View>
        </PanGestureHandler>
      </View>
      <Tabs translateY={translateY} />
    </View>
  );
}
