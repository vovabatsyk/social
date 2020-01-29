import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Content/Profile/Profile'
import {Route} from 'react-router-dom'
import DialogsContainer from './components/Content/Dialogs/DialogsContainer'


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile
                    store={props.store}
                    // posts={props.state.profilePage.posts}
                    // newPostText={props.state.newPostText}
                    // dispatch={props.dispatch}
                />}
                />
                <Route path='/dialogs' render={() => <DialogsContainer
                    store={props.store}
                    // messagesData={props.state.messagesPage.messagesData}
                    // dialogsData={props.state.messagesPage.dialogsData}
                    // dispatch={props.dispatch}
                />
                }/>
            </div>
        </div>
    )
}

export default App;
