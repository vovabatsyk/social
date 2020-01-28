const UPDATE_POST = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            state.posts.unshift(newPost)
            state.newPostText = ''
            return state
        case UPDATE_POST:
            state.newPostText = action.newText
            return state
        default:
            return state
    }

}

export const updateNewPostActionCreator = (text) => ({type: UPDATE_POST, newText: text})

export const addPostActionCreator = () => ({type: ADD_POST})


export default profileReducer
