import { http, HttpResponse } from 'msw'

import { PopularProductsResponse } from '../get-popular-products'

export const GetPopularProductsMock = http.get<never, never, PopularProductsResponse>(
  '/metrics/popular-products', () => {
    return HttpResponse.json([
      { product: 'Pizza 01', amount: 5 },
      { product: 'Pizza 02', amount: 4 },
      { product: 'Pizza 03', amount: 6 },
      { product: 'Pizza 04', amount: 3 },
      { product: 'Pizza 05', amount: 8 }
    ])
  })
