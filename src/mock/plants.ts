import { ImageSourcePropType } from 'react-native'

interface IPlant {
  id: string;
  name: string;
  price: number;
  source: ImageSourcePropType;
}

const plants: Array<IPlant> = [
  {
    id: '18',
    name: 'CIRCLECAC',
    price: 58.46,
    source: require('../assets/18.png')
  },
  {
    id: '19',
    name: 'BABOSA',
    price: 58.46,
    source: require('../assets/19.png')
  }
]

const plantsRecommeded: Array<IPlant> = [
  {
    id: '4',
    name: 'SAMANTHA',
    price: 12.5,
    source: require('../assets/4.png')
  },
  {
    id: '5',
    name: 'ANGELICA',
    price: 4.5,
    source: require('../assets/5.png')
  },
  {
    id: '6',
    name: 'RUBYROSE',
    price: 15.5,
    source: require('../assets/6.png')
  },
  {
    id: '7',
    name: 'CACTUNUS',
    price: 17.8,
    source: require('../assets/7.png')
  }
]

export { plants, plantsRecommeded, IPlant }
