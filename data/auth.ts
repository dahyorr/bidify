"use server"

import { db } from "./database"

export const createClerkUser = async (user: any) => {
  await db.user.create({
    data: {
      "id": user.id,
      "birthday": user.birthday,
      "email": user.email_addresses.find((a: any) => a.id === user.primary_email_address_id).email_address,
      "firstName": user.first_name,
      "lastName": user.last_name,
      "profileImageUrl": user.profile_image_url,
    }
  })
}

export const updateClerkUser = async (user: any) => {
  await db.user.update({
    where: {
      id: user.id
    },
    data: {
      "birthday": user.birthday,
      "email": user.email_addresses.find((a: any) => a.id === user.primary_email_address_id).email_address,
      "firstName": user.first_name,
      "lastName": user.last_name,
      "profileImageUrl": user.profile_image_url,
    }
  })
}

export const deleteClerkUser = async (user: any) => {
  await db.user.delete({
    where: {
      id: user.id
    }
  })
}