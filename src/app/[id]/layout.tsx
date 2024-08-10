import { PropsWithChildren } from 'react'
import { SideList } from './components/side-list'

interface LayoutProps extends PropsWithChildren {}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <SideList />
      {children}
    </div>
  )
}

export default Layout
