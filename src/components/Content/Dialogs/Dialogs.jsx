import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import {addMessageActionCreator, updateNewMessageActionCreator} from '../../../redux/dialogs-reducer'

const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    let dialogsElements = state.dialogsData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))
    let messagesElements = state.messagesData.map(message => (<Message text={message.text}/>))

    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    let onMessageChange = (e) => {
        let text = e.target.value
        props.store.dispatch(updateNewMessageActionCreator(text))
    }

    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.dialogs}>
                <h2>Dialogs</h2>
                {dialogsElements}
            </div>
            <div className={classes.line}></div>
            <div className={classes.messages}>
                <h2>Messages</h2>
                <textarea placeholder='text...'
                          wrap='off'
                          onChange={onMessageChange}
                          value={props.newMessageText}
                />
                <div className={classes.subMain}>
                    <button
                        className={classes.button}
                        onClick={addMessage}
                    >Add post
                    </button>
                </div>
                {messagesElements}
            </div>
        </div>
    )
}
export default Dialogs

