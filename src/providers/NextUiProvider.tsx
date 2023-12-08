'use client'

import {NextUIProvider} from '@nextui-org/react'

export function NextUiProvider({children}: { children: React.ReactNode }) {
  return (
    <NextUiProvider>
      {children}
    </NextUiProvider>
  )
}