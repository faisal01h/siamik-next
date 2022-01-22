import { FunctionComponent, Fragment, Suspense } from 'react'
import Header from '../header'

const Layout: FunctionComponent = ({ children }) => (
  <Fragment>
    <Header />
    <Suspense fallback={<b>Loading ...</b>}>
      {children}
    </Suspense>
  </Fragment>
)

export default Layout