import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import ProfileContainer from './components/Content/Profile/ProfileContainer'
import { Route } from 'react-router-dom'
import DialogsContainer from './components/Content/Dialogs/DialogsContainer'
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/profile' render={() => <ProfileContainer
        // store={props.store}
        // posts={props.state.profilePage.posts}
        // newPostText={props.state.newPostText}
        // dispatch={props.dispatch}
        />}
        />
        <Route path='/dialogs' render={() => <DialogsContainer
        // store={props.store}
        // messagesData={props.state.messagesPage.messagesData}
        // dialogsData={props.state.messagesPage.dialogsData}
        // dispatch={props.dispatch}
        />
        } />
        <Route path='/users' render={() => <UsersContainer />} />
      </div>
    </div>
  )
}

export default App;
