import { http, HttpResponse } from 'msw'

import { GetManagedRestaurantResponse } from '../get-managed-restaurant'

export const GetManagedRestaurantMock =
  http.get<never, never, GetManagedRestaurantResponse>('/managed-restaurant', () => {
    return HttpResponse.json({
      id: 'custom-restaurant-id',
      name: 'Pizza Shop',
      description: 'Custom restaurant description',
      managerId: 'customer-id',
      createdAt: new Date(),
      updatedAt: null
    })
  })
