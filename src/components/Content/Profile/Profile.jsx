import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import classes from './Profile.module.css'

const Profile = (props) => {
debugger
    return (
        <div className={classes.profile}>
            <ProfileInfo />
            <MyPosts
                posts={props.posts}
                addPost={props.addPost}
            />
        </div>
    )
}

export default Profile
