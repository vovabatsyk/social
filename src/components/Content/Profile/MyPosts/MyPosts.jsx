import React from 'react'
import Post from './Post/Post'
import classes from './MyPosts.module.css'
import {addPostActionCreator, updateNewPostActionCreator} from '../../../../redux/state'

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => (<Post message={post.message} count={post.likesCount}/>))

    let addPost = () => {
        props.dispatch(addPostActionCreator())
    }
    let onPostChange = (e) => {
        let text = e.target.value
        props.dispatch(updateNewPostActionCreator(text))
    }

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder='text...'
                          wrap='off'
                          onChange={onPostChange}
                          value={props.newPostText}/><br/>
                <div className={classes.subMain}>
                    <button
                        className={classes.button}
                        onClick={addPost}
                    >Add post
                    </button>
                </div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts
