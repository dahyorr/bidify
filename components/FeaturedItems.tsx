import { getRecentItems } from '@/data/getItems'
import { useQuery } from '@tanstack/react-query'
import React from 'react'
import ItemCard from './ItemCard'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel'

const FeaturedItems = async () => {
  const item = await getRecentItems()


  return (
    <>
      <h1 className='text-xl font-semibold mb-2'>Featured Items</h1>
      <Carousel>
        <CarouselContent className=''>
          <CarouselItem className=' max-w-xs '>
            <ItemCard
              img='https://source.unsplash.com/9if4MIUhYl8'
              title='Item 1'
            />
          </CarouselItem>
          <CarouselItem className=' max-w-xs '>
            <ItemCard
              img='https://source.unsplash.com/9if4MIUhYl8'
              title='Item 1'
            />
          </CarouselItem>
          <CarouselItem className=' max-w-xs'>
            <ItemCard
              img='https://source.unsplash.com/9if4MIUhYl8'
              title='Item 1'
            />
          </CarouselItem>


          <CarouselItem className=' max-w-xs'>
            <ItemCard
              img='https://source.unsplash.com/9if4MIUhYl8'
              title='Item 1'
            />
          </CarouselItem>



        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />


      </Carousel>
    </>
  )
}

export default FeaturedItems