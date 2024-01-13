import React, { PropsWithChildren } from 'react'

const FormLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className='rounded-md border border-gray-500 px-4 py-2'>
      {children}
    </div>
  )
}

export default FormLayout