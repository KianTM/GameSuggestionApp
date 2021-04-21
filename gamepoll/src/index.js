import React from 'react'
import ReactDOM from 'react-dom'
import 'semantic-ui-css/semantic.min.css'
import CreatePoll from './components/poll.js'

const myfirstelement = (
    <div>
        <h1>Game Poll</h1>
        <CreatePoll />
    </div>
)

ReactDOM.render(myfirstelement, document.getElementById('root'))