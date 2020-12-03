import React, { Suspense } from 'react'
import { render } from 'react-dom'
const Dashboard = React.lazy(() => import('dashboard/spa'))
const App = () => {
  return <><Suspense fallback={<div>Loading...</div>}><h1>Hi!</h1><Dashboard/></Suspense></>
}
render(<App />, document.getElementById('root'))

