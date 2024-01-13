'use client'
import React from 'react'
import { Card, CardBody, CardFooter, CardHeader, Image } from "@nextui-org/react";

interface IProps {

  title: string;
  // price: string;
  img: string;
  expireAt?: string;
}

const ItemCard = ({ title, img, expireAt }: IProps) => {
  return (
    <Card shadow="sm" isPressable onPress={() => console.log("item pressed")} isFooterBlurred >
      <CardHeader className="text-small justify-between">
        <b>{title}</b>

      </CardHeader>
      <CardBody className="overflow-visible ">
        <Image
          shadow="sm"
          radius="lg"
          width="100%"
          alt={title}
          className="w-full object-cover h-[140px]"
          src={img}
        />
      </CardBody>
      <CardFooter className="text-small justify-between" >
        {/* <p className="text-default-500">{price}</p> */}
      </CardFooter>
    </Card>
  )
}

export default ItemCard