import { createContext } from 'react'

import { lightColors } from './colors'

export type ThemeType = 'dark' | 'light'

export const ThemeContext = createContext({
  isDark: false,
  colors: lightColors,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setScheme: (scheme: ThemeType) => {},
})
