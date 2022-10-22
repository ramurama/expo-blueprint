import { StyleSheet, View } from 'react-native'

import { Container } from '../../components'
import { HeaderHome } from './components/HeaderHome'

export const Home = () => {
  return (
    <Container>
      <View style={{ ...styles.mainView }}>
        <HeaderHome />
      </View>
    </Container>
  )
}

export const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    marginTop: 50,
  },
})
