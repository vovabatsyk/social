const UPDATE_MESSAGE = 'UPDATE-NEW-MESSAGE-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'

let initialState = {
    dialogsData: [
        {id: 1, name: 'Lee'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Rocky'},
        {id: 4, name: 'Alex'},
        {id: 5, name: 'Andrew'}
    ],
    messagesData: [
        {id: 1, text: 'CSS'},
        {id: 2, text: 'JS'},
        {id: 3, text: 'ReactJS'},
        {id: 4, text: 'Angular 8'},
        {id: 5, text: 'VueJS'}
    ],
    newMessageText: 'vova'
}

const dialogsReducer = (state = initialState, action) => {
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

}

export const updateNewMessageActionCreator = (text) => ({type: UPDATE_MESSAGE, newText: text})

export const addMessageActionCreator = () => ({type: ADD_MESSAGE})

export default dialogsReducer
