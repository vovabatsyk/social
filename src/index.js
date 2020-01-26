import * as serviceWorker from './serviceWorker'
import state, {subscribe} from './redux/state'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {addMessage, addPost, updateNewPostText} from './redux/state'
import {BrowserRouter} from 'react-router-dom'

let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                addPost={addPost}
                updateNewPostText={updateNewPostText}
                addMessage={addMessage}
            />
        </BrowserRouter>
        , document.getElementById('root'));
}
rerenderEntireThree(state)
subscribe(rerenderEntireThree)

serviceWorker.unregister();
