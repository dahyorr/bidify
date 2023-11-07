'use client'

import React, { PropsWithChildren } from 'react'
import { NextUIProvider } from '@nextui-org/react'
import { ThemeProvider } from 'next-themes'
  
const NextThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <NextUIProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </NextUIProvider>
  )
}

export default NextThemeProvider