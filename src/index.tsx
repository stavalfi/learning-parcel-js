import 'babel-polyfill'

// index.tsx
import React from 'react'
import ReactDOM from 'react-dom'
import 'home.tsx'

console.log('Hello from tsx!')

ReactDOM.render(<p>Hello</p>, document.getElementById('root'))

const str: string = '2'
str = 2
