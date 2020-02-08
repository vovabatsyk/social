const UPDATE_POST = 'UPDATE-NEW-POST-TEXT'
const ADD_POST = 'ADD-POST'
const SET_USER_PROFILE = 'SET_USER_PROFILE'

let initialState = {
    posts: [
        {
            id: 1,
            message: 'Универсальное свойство border позволяет одновременно установить толщину, стиль и цвет границы вокруг элемента. Значения могут идти в любом порядке, разделяясь пробелом, браузер сам определит, какое из них соответствует нужному свойству. Для установки границы только на определенных сторонах элемента, воспользуйтесь свойствами border-top, border-bottom, border-left, border-right.',
            likesCount: 15
        },
        {
            id: 2,
            message: 'Браузер Internet Explorer до шестой версии включительно при толщине границы 1px отображает dotted как dashed. При толщине 2px и выше значение dotted работает корректно. Эта ошибка исправлена в IE7, но только для всех границ толщиной 1px. Если одна из границ блока имеет толщину 2px и выше, то в IE7 значение dotted превращается в dashed.',
            likesCount: 20
        },
        {
            id: 3,
            message: 'React — відкрита JavaScript бібліотека для створення інтерфейсів користувача, яка покликана вирішувати проблеми часткового оновлення вмісту веб-сторінки, з якими стикаються в розробці односторінкових застосунків. Розробляється Facebook, Instagram і спільнотою індивідуальних розробників.',
            likesCount: 7
        },
    ],
    newPostText: 'proger',
    profile: null
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [newPost, ...state.posts],
                newPostText: ''
            }
        }
        case UPDATE_POST: {
            return  {
                ...state,
                newPostText: action.newText
            }
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            }
        }
        default:
            return state

    }

}

export const updateNewPostActionCreator = (text) => ({type: UPDATE_POST, newText: text})

export const addPostActionCreator = () => ({type: ADD_POST})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})


export default profileReducer
