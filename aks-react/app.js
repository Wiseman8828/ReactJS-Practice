import React from 'react'
import ReactDOM from 'react-dom/client'

const title = React.createElement('h1',{
    id:"heading"
},'Welcome to React!')

const nestedChild = React.createElement('div',{},
    [
        React.createElement('h2',{},'hey i\'m 1st sibling'),
        React.createElement('h2',{}, 'hey i\'m 1st sibling')
    ])
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(nestedChild)