import React from 'react'
import classes from './Users.module.css'
import * as axios from 'axios'
import userPhoto from '../../assets/images/user.png'

let Users = (props) => {
    if (props.users.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then(response => {
                props.setUsers(response.data.items)
            })

    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={classes.userAva}>
                            <img src={u.photos.small
                                ? u.photos.small
                                : userPhoto
                            } alt="user"/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unFollow(u.id)
                                }}>UnFollow</button>
                                : <button onClick={() => {
                                    props.follow(u.id)
                                }}>Follow</button>
                            }
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{u.name}</div><
                            div>{u.status}</div>
                        </span>
                        <span>
                            <div>{'u.location.city'}</div>
                            <div>{'u.location.country'}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users
