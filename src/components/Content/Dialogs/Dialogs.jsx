import React from 'react'
import classes from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'

const Dialogs = (props) => {

    let dialogsElements = props.dialogsData.map(dialog => (<DialogItem name={dialog.name} id={dialog.id}/>))
    let messagesElements = props.messagesData.map(message => (<Message text={message.text}/>))


    return (
        <div className={classes.dialogsWrapper}>
            <div className={classes.dialogs}>
                <h2>Dialogs</h2>
                { dialogsElements }
            </div>
            <div className={classes.line}></div>
            <div className={classes.messages}>
                <h2>Messages</h2>
                { messagesElements }
            </div>
        </div>
    )
}
export default Dialogs

