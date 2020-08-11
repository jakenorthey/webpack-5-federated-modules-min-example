import React from 'react'
import { render } from 'react-dom'

const App = (props) => {
  return <div>Hello {props.name}!</div>
}
const renderApp = (name: string) => {
  render(<App name={name}/>, document.getElementById('root'))
}
export default renderApp
