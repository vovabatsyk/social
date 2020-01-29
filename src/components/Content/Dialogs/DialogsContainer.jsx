import React from 'react'
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../../redux/dialogs-reducer'
import Dialogs from './Dialogs'

const DialogsContainer = (props) => {
    let state = props.store.getState().dialogsPage

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (text) => {
        props.store.dispatch(updateNewMessageActionCreator(text))
    }

    return (
        <Dialogs
            updateNewMessage={onMessageChange}
            sendMessage={addMessage}
            dialogsPage={state}
        />)
}
export default DialogsContainer

