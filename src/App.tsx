import React from 'react'
import { StatusBar } from 'react-native'

import Routes from './routes/routes'

const App: React.FC = () => {
  return (
    <>
      <StatusBar backgroundColor="#00a46c" barStyle="dark-content" />
      <Routes />
    </>
  )
}

export default App
