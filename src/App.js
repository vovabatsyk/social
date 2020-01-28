import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Content/Dialogs/Dialogs'
import Profile from './components/Content/Profile/Profile'
import {Route} from 'react-router-dom'


const App = (props) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <Navbar/>
            <div className='app-wrapper-content'>
                <Route path='/profile' render={() => <Profile
                    posts={props.state.profilePage.posts}
                    dispatch={props.dispatch}
                />}
                />
                <Route path='/dialogs' render={() => <Dialogs
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
