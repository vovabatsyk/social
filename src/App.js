import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Content/Dialogs/Dialogs'
import Profile from './components/Content/Profile/Profile'
import {Route} from 'react-router-dom'


const App = (props) => {
debugger
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile
                    posts={props.state.profilePage.posts}
                    addPost={props.addPost}
                />}
                />
                <Route path='/dialogs' component={() => <Dialogs
                    messagesData={props.state.messagesPage.messagesData}
                    dialogsData={props.state.messagesPage.dialogsData}
                    addMessage={props.addMessage}
                />
                }/>
            </div>
        </div>
    )
}

export default App;
