"use client";
import FormLayout from '@/components/FormLayout'
import { capitalizeWords } from '@/helpers/utils'
import { UploadButton } from '@/lib/uploadthing';
import { Button, Input, Image, Select, SelectItem, Textarea, Slider } from '@nextui-org/react'
import React from 'react'
import { useForm } from '@tanstack/react-form'
import type { FieldApi } from '@tanstack/react-form'
import { UploadFileResponse } from 'uploadthing/client';
import { addItem } from '@/data/items';
import FieldInfo from '@/components/ui/FieldInfo';
import { yupValidator } from '@tanstack/yup-form-adapter'
import * as yup from 'yup'
const categories = [
  { label: 'Electronics', value: 'electronics' },
  { label: 'Computing', value: 'computing' },
  { label: 'Appliances', value: 'appliances' },

]



const NewItemPage = () => {

  const form = useForm({
    defaultValues: {
      name: '',
      description: '',
      imgData: [] as UploadFileResponse<{
        uploadedBy: string;
      }>[],
      categories: "",
      duration: 3 as number | number[],
      minPrice: 0
    },
    onSubmit: async ({ value }) => {
      // Do something with form data
      await addItem(value)
    },
  })
  return (
    <FormLayout>
      <h1 className='mb-8'>New Item</h1>

      <form.Provider>
        <form onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          void form.handleSubmit()
        }}>
          <form.Field
            name="name"
            children={(field) => {
              // Avoid hasty abstractions. Render props are great!
              return (
                <>
                  <Input
                    isRequired
                    className='mb-4'
                    label="Name"
                    placeholder="Enter the item name"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    isInvalid={field.state.meta.touchedErrors.length > 0}
                    errorMessage={field.state.meta.touchedErrors}
                  />
                </>
              )
            }}
          />
          <form.Field
            name="description"
            children={(field) => {
              // Avoid hasty abstractions. Render props are great!
              return (
                <>
                  <Textarea
                    isRequired
                    className='mb-4'
                    label="Description"
                    placeholder="Enter a description"
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}
                    isInvalid={field.state.meta.touchedErrors.length > 0}
                    errorMessage={field.state.meta.touchedErrors}
                  />
                </>
              )
            }}
          />

          <form.Field
            name="categories"
            children={(field) => {
              // Avoid hasty abstractions. Render props are great!
              return (
                <>
                  <Select
                    label="Category"
                    placeholder="Select a category"
                    selectionMode='multiple'
                    className='mb-4'
                    isRequired
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    isInvalid={field.state.meta.touchedErrors.length > 0}
                    errorMessage={field.state.meta.touchedErrors}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e.target.value)}                >
                    {categories.map((c) => (
                      <SelectItem key={c.value} value={c.value}>
                        {capitalizeWords(c.label)}
                      </SelectItem>
                    ))}
                  </Select>
                </>
              )
            }}
          />

          <form.Field
            name="imgData"
            children={(field) => {
              return (
                <>
                  <div className="flex gap-1">
                    {field.state.value.map((img) => (<Image
                      key={img.key}
                      width={300}
                      alt=""
                      src={img.url}
                    />))}
                  </div>

                  <UploadButton
                    endpoint="imageUploader"
                    onClientUploadComplete={(res) => {
                      field.handleChange(res);
                    }}
                    onUploadError={(error: Error) => {
                      // Do something with the error.
                      alert(`ERROR! ${error.message}`);
                    }}
                  />
                  <FieldInfo field={field} />
                </>
              )
            }}
          />

          <form.Field
            name="minPrice"
            children={(field) => {
              return (
                <>
                  <Input
                    type="number"
                    label="Minimum Price"
                    className='mb-4'
                    id={field.name}
                    name={field.name}
                    isInvalid={field.state.meta.touchedErrors.length > 0}
                    errorMessage={field.state.meta.touchedErrors}
                    value={String(field.state.value)}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(Number(e.target.value))}
                    placeholder="0.00"
                    labelPlacement="outside"
                    startContent={
                      <div className="pointer-events-none flex items-center">
                        <span className="text-default-400 text-small">$</span>
                      </div>
                    }
                  />

                </>
              )
            }}
          />

          <form.Field
            name="duration"
            children={(field) => {
              console.log(field.state.value)
              return (
                <>
                  <Slider
                    label="Bid Duration"
                    step={1}
                    maxValue={10}
                    minValue={1}
                    showSteps={true}
                    defaultValue={3}
                    className="max-w-md"
                    showTooltip
                    id={field.name}
                    name={field.name}
                    value={field.state.value}
                    onBlur={field.handleBlur}
                    onChange={(e) => field.handleChange(e)}
                    isInvalid={field.state.meta.touchedErrors.length > 0}
                    errorMessage={field.state.meta.touchedErrors}
                    getValue={(days) => `${days} day${Number(days) > 1 ? "s" : ""}`}
                  />

                </>
              )
            }}
          />


          <Button type="submit">Create item</Button>
        </form>
      </form.Provider>
    </FormLayout>
  )
}

export default NewItemPage