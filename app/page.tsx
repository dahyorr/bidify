import FeaturedItems from '@/components/FeaturedItems'
import { Button } from '@nextui-org/react'
import { useQuery } from '@tanstack/react-query'
import Image from 'next/image'
import Link from 'next/link'

export default async function Home() {


  return (
    <main className="xl:container  xl:mx-auto py-5">
      {/* <Fl */}
      <div className="flex justify-end items-center mb-2">
        <Button as={Link} href="/items/new" size="sm" color="primary">
          New Item
        </Button>
      </div>
      <FeaturedItems />
    </main>
  )
}
