import React from 'react'
import { MenuLateral } from '../../components'
 
export function AdminLayout({children}) {
  return (
    <div>
      <MenuLateral/>
      {children}
    </div>
  )
}
