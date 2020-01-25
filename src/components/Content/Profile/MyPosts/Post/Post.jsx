import React from 'react'
import classes from './Post.module.css'

const Post = props => {
    return (
        <div className={classes.post}>
            <img className={classes.ava} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN97_0ZONySF0J6OfezWLk_8CJQtvK32-7q7nylScHzYpPeWRSfA&s'
                 alt='avatar'/>
            <p>
                {props.message}
            </p>
            <hr className={classes.line}/>
            <div className={classes.like}>
                <span>
                    <img src='https://pngimg.com/uploads/like/like_PNG1.png' alt='like'/>
                    ({props.count})
                </span>
                <span> <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Not_facebook_not_like_thumbs_down.png/700px-Not_facebook_not_like_thumbs_down.png' alt='dislike'/>
                (0)
                </span>
            </div>
        </div>
    )
}

export default Post
