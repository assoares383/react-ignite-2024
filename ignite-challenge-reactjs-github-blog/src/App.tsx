import { RouterProvider } from "react-router-dom"

import { ThemeProvider } from "styled-components"
import { defaultTheme } from "./styles/themes/default"

import { GlobalStyle } from "./styles/global"

import { router } from "./routes"


const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <RouterProvider router={router}/>
    </ThemeProvider>
  )
}

export { App }
