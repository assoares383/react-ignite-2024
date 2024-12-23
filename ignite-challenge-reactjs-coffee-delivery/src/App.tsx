import { ThemeProvider } from 'styled-components'

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from './styles/global';

import { DefaultLayout } from './layouts/DefaultLayout';

import { CartContextProvider } from './contexts/CartProvider';

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />

      <CartContextProvider>
        <DefaultLayout />
      </CartContextProvider>
    </ThemeProvider>
  )
}

export default App
