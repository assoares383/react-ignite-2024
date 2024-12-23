import { createBrowserRouter } from 'react-router-dom'

import App from "../App";

import { Home } from '../pages/Home'
import { Cart } from '../pages/Cart'
import { Success } from '../pages/Success';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path:'/',
        element: <Home />
      },
      {
        path:'/cart',
        element: <Cart />
      },
      {
        path: '/order/:orderId/success',
        element: <Success />,
      },
    ]
  }
])

export { router }
