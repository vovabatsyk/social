import React from 'react'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import classes from './Profile.module.css'
import MyPostsContainer from './MyPosts/MyPostsContainer'

const Profile = (props) => {
    return (
        <div className={classes.profile}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer
                // store={props.store}
                // posts={props.posts}
                // newPostText={props.newPostText}
                // dispatch={props.dispatch}
            />
        </div>
    )
}

export default Profile
