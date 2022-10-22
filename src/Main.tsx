import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

import { Navigation } from './navigation/Navigation'
import { persistor, store } from './redux/store'
import { Home } from './screens/Home/Home'
import { defineBackgroundSyncTask } from './services/dataSyncService'
import { ThemeProvider } from './theme'

defineBackgroundSyncTask()

export default function Main() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider>
          <Navigation>
            <Home />
          </Navigation>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}
