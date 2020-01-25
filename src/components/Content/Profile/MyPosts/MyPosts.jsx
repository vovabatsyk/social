import React from 'react'
import Post from './Post/Post'
import classes from './MyPosts.module.css'

const MyPosts = (props) => {

    let postsElements = props.posts.map(post => (<Post message={post.message} count={post.likesCount}/>))

    let newPostElement = React.createRef()
    let addPost = () => {
        let text = newPostElement.current.value
        props.addPost(text)
        newPostElement.current.value = ''
    }

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div>
                <textarea placeholder='text...' wrap='off' ref={newPostElement}/><br/>
                <div className={classes.subMain}>
                    <button
                        className={classes.button}
                        onClick={ addPost }
                    >Add post</button>
                </div>
                {postsElements}
            </div>
        </div>
            )
            }

            export default MyPosts
