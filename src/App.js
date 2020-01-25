import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Dialogs from './components/Content/Dialogs/Dialogs'
import {BrowserRouter, Route} from 'react-router-dom'
import Profile from './components/Content/Profile/Profile'


const App = (props) => {

    return (

        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Route path='/profile' render={() => <Profile
                        posts={props.state.profilePage.posts}
                    />}
                    />
                    <Route path='/dialogs' component={() => <Dialogs
                        messagesData={props.state.messagesPage.messagesData}
                        dialogsData={props.state.messagesPage.dialogsData}
                    />
                    }/>
                </div>
            </div>
        </BrowserRouter>
    )
}

export default App;
