import * as serviceWorker from './serviceWorker'
import store from './redux/state'
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import {BrowserRouter} from 'react-router-dom'

let rerenderEntireThree = (state) => {
    ReactDOM.render(
        <BrowserRouter>
            <App
                state={state}
                dispatch={store.dispatch.bind(store)}
                addMessage={store.addMessage.bind(store)}
            />
        </BrowserRouter>
        , document.getElementById('root'));
}
rerenderEntireThree(store.getState())
store.subscribe(rerenderEntireThree)

serviceWorker.unregister();
