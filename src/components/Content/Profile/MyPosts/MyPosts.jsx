import React from 'react'
import Post from './Post/Post'
import classes from './MyPosts.module.css'

const MyPosts = (props) => {
    let postsElements = props.posts.map(post => (<Post message={post.message} count={post.likesCount}/>))

    let newPostElement = React.createRef()

    let onAddPost = () => {
        props.addPost()
    }
    let onPostChange = () => {
        let text = newPostElement.current.value
        props.updateNewPostText(text)
    }

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder='text...'
                          ref={newPostElement}
                          wrap='off'
                          onChange={onPostChange}
                          value={props.newPostText}
                    />
                          <br/>
                <div className={classes.subMain}>
                    <button
                        className={classes.button}
                        onClick={onAddPost}
                    >Add post
                    </button>
                </div>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts
