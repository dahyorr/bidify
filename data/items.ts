import { cache } from 'react'
import { db } from './database'
import { auth, } from "@clerk/nextjs";

export const revalidate = 60

export const getRecentItems = cache(async () => {
  console.log('items',)

  const items = await db.item.findMany({
    take: 10,
    orderBy: {
      createdAt: 'desc'
    },
  })
  console.log('items', items)
  return items
})

export const addItem = async (item: any) => {
  const user = auth()
  if (user.userId) {
    await db.item.create({
      data: {
        "name": item.name,
        "description": item.description,
        "minPrice": item.price,
        "imageUrl": item.imageData.map((image: any) => image.url),
        "duration": item.duration,
        "userId": user.userId,
        "categories": item.categories.split(',')
      }
    })
  }
  else {
    throw new Error('Unauthorized')
  }

}