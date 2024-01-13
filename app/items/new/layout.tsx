import React, { PropsWithChildren } from 'react'

const NewItemLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className='sm:container mx-auto'>
      {children}
    </main>
  )
}

export default NewItemLayout