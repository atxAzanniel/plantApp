import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1
  },

  header: {
    backgroundColor: '#00a46c',
    height: 230,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingHorizontal: 20
  },

  profile_row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 30,
    width: '100%'
  },

  username: {
    fontSize: 30,
    color: '#FFF',
    fontWeight: 'bold'
  },

  containerSearch: {
    backgroundColor: '#FFF',
    paddingVertical: 8,
    paddingHorizontal: 20,
    marginHorizontal: 20,
    borderRadius: 15,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  search: {
    fontWeight: 'bold',
    fontSize: 18,
    width: 260
  },

  category: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between'
  },

  category_name: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#585a61',
    borderBottomWidth: 2,
    borderBottomColor: '#b1e5d3'
  },

  category_button_more: {
    backgroundColor: '#00a46c',
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 20
  },

  category_more: {
    color: '#fff',
    fontWeight: 'bold'
  },

  plant_button: {
    height: 250,
    elevation: 2,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    marginTop: 20,
    borderRadius: 15,
    marginBottom: 10,
    width: 160
  },

  plant_image: {
    width: '100%',
    height: '75%',
    resizeMode: 'cover',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15
  },

  plant_description_area: {
    flexDirection: 'row',
    paddingTop: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  plant_name: {
    fontWeight: 'bold'
  },

  plant_price: {
    fontWeight: 'bold',
    color: '#00a46c'
  },

  plant_country: {
    paddingHorizontal: 10,
    fontWeight: 'bold',
    color: '#b1e5d3',
    paddingTop: 3
  }
})

export default styles
