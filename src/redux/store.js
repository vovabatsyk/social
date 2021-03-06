import profileReducer from './profile-reducer'
import dialogsReducer from './dialogs-reducer'
import sidebarReducer from './sidebar-reducer'

let store = {
    _rerender() {
        console.log('State was changed')
    },
    _state: {
        profilePage: {
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
            newPostText: 'proger'
        },
        dialogsPage: {
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
        },
        sidebar: {}
    },

    getState() {
        return this._state
    },
    subscribe(observer) {
        this._rerender = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)
        this._rerender(this._state)

       /* if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            }
            this._state.profilePage.posts.unshift(newPost)
            this._state.profilePage.newPostText = ''
            this._rerender(this._state)
        } else if (action.type === UPDATE_POST) {
            this._state.profilePage.newPostText = action.newText
            this._rerender(this._state)
        } else if (action.type === ADD_MESSAGE) {
            let body = this._state.dialogsPage.newMessageText
            this._state.dialogsPage.messagesData.unshift({id: 7, text: body})
            this._state.dialogsPage.newMessageText = ''
            this._rerender(this._state)
        } else if (action.type === UPDATE_MESSAGE) {
            this._state.dialogsPage.newMessageText = action.newText
            this._rerender(this._state)
        }*/
    }

}

export default store
