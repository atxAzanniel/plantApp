import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import Swiper from 'react-native-swiper'

const SwiperComponent: React.FC = () => {
  return (
    <Swiper
      style={styles.wrapper}
      dotStyle={styles.dot}
      activeDotStyle={styles.dot_active}
      activeDotColor="#fff"
    >
      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require('../assets/img.png')}
        />
      </View>

      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require('../assets/img2.png')}
        />
      </View>

      <View style={styles.slide}>
        <Image
          style={styles.image}
          source={require('../assets/img-1.png')}
        />
      </View>
    </Swiper>
  )
}

const styles = StyleSheet.create({
  wrapper: {

  },

  dot: {
    marginTop: -200,
    width: 15,
    height: 5,
    borderRadius: 10,
    backgroundColor: '#fff'
  },

  dot_active: {
    marginTop: -200,
    width: 30,
    height: 6,
    borderRadius: 10,
    backgroundColor: '#FFF'
  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFF'
  },

  image: {
    marginLeft: 120,
    marginBottom: 130,
    height: 720,
    width: 420,
    marginTop: 60,
    resizeMode: 'stretch'
  }
})

export default SwiperComponent
