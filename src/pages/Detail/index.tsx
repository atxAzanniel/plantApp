import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useNavigation, useRoute } from '@react-navigation/native'
import { View, TouchableOpacity, Text, ScrollView } from 'react-native'

import styles from './styles'

import SwiperComponent from '../../components/SwiperComponent'
import { IPlant } from '../../mock/plants'

interface IRouteParams {
  plant: IPlant
}

const Detail: React.FC = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { plant } = route.params as IRouteParams

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
    >
      <View style={styles.container}>

        <View style={styles.content_area}>

          <View style={styles.sidebar}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ marginVertical: 20 }}
            >
              <MaterialCommunityIcons name="keyboard-backspace" color="#666" size={28} />
            </TouchableOpacity>

            <View style={styles.info_rect}>
              <MaterialCommunityIcons name="weather-sunny" color="#008f6e" size={36} />
            </View>

            <View style={styles.info_rect}>
              <MaterialCommunityIcons name="watering-can" color="#008f6e" size={36} />
            </View>

            <View style={styles.info_rect}>
              <MaterialCommunityIcons name="coolant-temperature" color="#008f6e" size={36} />
            </View>

            <View style={styles.info_rect}>
              <MaterialCommunityIcons name="weather-windy" color="#008f6e" size={36} />
            </View>
          </View>

          <View style={styles.swiper}>
            <SwiperComponent />
          </View>
        </View>

        <View>
          <View style={styles.plant}>
            <Text style={styles.name}>
              {plant.name}
            </Text>

            <Text style={styles.price}>
              R$ {String(plant.price.toFixed(2).replace('.', ','))}
            </Text>
          </View>

          <Text style={styles.country}>
            Brasil
          </Text>
        </View>

        <View style={styles.group_buttons}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: '#00a46c', borderTopRightRadius: 30 }]}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                color: '#fff'
              }}
            >
              Comprar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button]}
          >
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 17,
                color: '#62636a'
              }}
            >
              Saber Mais
            </Text>
          </TouchableOpacity>
        </View>

      </View>
    </ScrollView>
  )
}

export default Detail
