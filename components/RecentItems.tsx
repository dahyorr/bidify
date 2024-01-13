import { getRecentItems } from '@/data/getItems'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import HorizontalItemList from './HorizontalItemList'
import ItemCard from './ItemCard'

const FeaturedItems = async () => {
  const item = await getRecentItems()


  return (
    <>
      <h1 className='text-xl font-semibold mb-2'>Recently Added Items</h1>
      <HorizontalItemList>
        <ItemCard
          img='https://source.unsplash.com/9if4MIUhYl8'
          title='Item 1'
        />
        <ItemCard
          img='https://source.unsplash.com/9if4MIUhYl8'
          title='Item 1'
        />
        <ItemCard
          img='https://source.unsplash.com/9if4MIUhYl8'
          title='Item 1'
        />
        <ItemCard
          img='https://source.unsplash.com/9if4MIUhYl8'
          title='Item 1'
        />
        <ItemCard
          img='https://source.unsplash.com/9if4MIUhYl8'
          title='Item 1'
        />
        <ItemCard
          img='https://source.unsplash.com/9if4MIUhYl8'
          title='Item 1'
        />
        <ItemCard
          img='https://source.unsplash.com/9if4MIUhYl8'
          title='Item 1'
        />
        <ItemCard
          img='https://source.unsplash.com/9if4MIUhYl8'
          title='Item 1'
        />
        <ItemCard
          img='https://source.unsplash.com/9if4MIUhYl8'
          title='Item 1'
        />
        <ItemCard
          img='https://source.unsplash.com/9if4MIUhYl8'
          title='Item 1'
        />
        
      </HorizontalItemList>
    </>
  )
}

export default FeaturedItems