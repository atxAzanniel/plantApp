import React from 'react'
import { View, Text, TouchableOpacity, Image, TextInput, FlatList, ImageSourcePropType, ScrollView } from 'react-native'
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { LinearGradient } from 'expo-linear-gradient'

import styles from './styles'

import imageProfile from '../../assets/g.png'
import platsRecommed from '../../mock/plants_recommed'
import plants from '../../mock/plants'
interface IPlant {
  id: string;
  name: string;
  price: number;
  source: ImageSourcePropType;
}

const Home: React.FC = () => {
  const _renderPlantsRecommended = ({ item }: { item: IPlant }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={styles.plant_button}
      >
        <Image
          style={styles.plant_image}
          source={item.source}
        />

        <View style={styles.plant_description_area}>
          <Text style={styles.plant_name}>
            {item.name}
          </Text>

          <Text style={styles.plant_price}>
            R${String(item.price.toFixed(2)).replace('.', ',')}
          </Text>
        </View>

        <Text style={styles.plant_country}>
          BRASIL
        </Text>
      </TouchableOpacity>
    )
  }

  const _renderPlants = ({ item }: { item: IPlant }) => {
    return (
      <TouchableOpacity
        key={item.id}
        style={[styles.plant_button, { width: 300 }]}
      >
        <Image
          style={styles.plant_image}
          source={item.source}
        />

        <View style={styles.plant_description_area}>
          <Text style={styles.plant_name}>
            {item.name}
          </Text>

          <Text style={styles.plant_price}>
            R${String(item.price.toFixed(2)).replace('.', ',')}
          </Text>
        </View>

        <Text style={styles.plant_country}>
          BRASIL
        </Text>
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      <ScrollView
        style={{
          marginBottom: 10
        }}
      >

        <View style={styles.header}>
          <TouchableOpacity
            style={{
              marginTop: 40
            }}
          >
            <MaterialCommunityIcons name="menu-open" color="#fff" size={28} />
          </TouchableOpacity>

          <View style={styles.profile_row}>
            <View style={{ width: '50%' }}>
              <Text style={styles.username}>
                Olá, Leandro
            </Text>
            </View>

            <View style={{ width: '50%', alignItems: 'flex-end' }}>
              <Image source={imageProfile} />
            </View>
          </View>
        </View>

        <LinearGradient
          colors={['rgba(0,164,109,0.4)', 'transparent']}
          style={{
            left: 0,
            right: 0,
            height: 100,
            marginTop: -45
          }}
        >
          <View style={styles.containerSearch}>
            <TextInput
              placeholder="Pesquisar"
              placeholderTextColor="#b1e5d3"
              style={styles.search}
            />

            <MaterialIcons name="search" color="#ddd" size={38} />
          </View>
        </LinearGradient>

        {/* RECOMENDADO */}

        <View style={styles.category}>
          <Text style={styles.category_name}>
            Recomendado
        </Text>
          <TouchableOpacity style={styles.category_button_more}>
            <Text style={styles.category_more}>
              Mais
          </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 300 }}
          data={platsRecommed}
          keyExtractor={item => item.id}
          renderItem={_renderPlantsRecommended}
        />

        {/* PLANTAS EM DESTAQUE */}

        <View style={styles.category}>
          <Text style={styles.category_name}>
            Plantas em Destaque
        </Text>
          <TouchableOpacity style={styles.category_button_more}>
            <Text style={styles.category_more}>
              Mais
          </Text>
          </TouchableOpacity>
        </View>

        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ height: 300 }}
          data={plants}
          keyExtractor={item => item.id}
          renderItem={_renderPlants}
        />

      </ScrollView>
    </View>
  )
}

export default Home
