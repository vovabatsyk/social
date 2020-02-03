// import React from 'react'
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../../redux/dialogs-reducer'
import Dialogs from './Dialogs'
import {connect} from "react-redux"

/*const DialogsContainer = (props) => {
    /!*let state = props.store.getState().dialogsPage

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
        />)*!/
}*/

let mapStateToProps = state => {
        return {
            dialogsPage: state.dialogsPage
        }
    }

let mapDispatchToProps  = (dispatch) => {
    return {
        updateNewMessage: (text) => {
            dispatch(updateNewMessageActionCreator(text))
        },
        sendMessage: () => {
            dispatch(addMessageActionCreator())
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer

