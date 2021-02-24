import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },

  content_area: {
    flexDirection: 'row',
    width: '100%',
    height: 650
  },

  sidebar: {
    width: '10%',
    paddingLeft: 20
  },

  info_rect: {
    backgroundColor: '#FFF',
    height: 50,
    width: 50,
    borderRadius: 5,
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },

  swiper: {
    width: '90%'
  },

  plant: {
    flexDirection: 'row',
    marginTop: -80,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  name: {
    fontWeight: 'bold',
    fontSize: 26,
    color: '#62636a'
  },

  price: {
    fontWeight: 'bold',
    color: '#00a46c',
    fontSize: 24
  },

  country: {
    paddingHorizontal: 20,
    fontWeight: 'bold',
    color: '#b1e5d3',
    marginTop: -20,
    fontSize: 20
  },

  group_buttons: {
    flexDirection: 'row',
    width: '100%'
  },

  button: {
    width: '50%',
    height: 70,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default styles
