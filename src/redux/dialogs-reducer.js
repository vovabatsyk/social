const UPDATE_MESSAGE = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

const dialogsReducer = (state, action) => {

    // eslint-disable-next-line default-case
    switch (action.type) {
        case ADD_MESSAGE:
            let body = state.newMessageText
            state.messagesData.unshift({id: 7, text: body})
            state.newMessageText = ''
            return state
        case UPDATE_MESSAGE:
            state.newMessageText = action.newText
            return state
        default:
            return state

    }
    /*    if (action.type === ADD_MESSAGE) {
            let body = state.newMessageText
            state.messagesData.unshift({id: 7, text: body})
            state.newMessageText = ''
        } else if (action.type === UPDATE_MESSAGE) {
            state.newMessageText = action.newText
        }*/
}

export const updateNewMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, newText: text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default dialogsReducer
