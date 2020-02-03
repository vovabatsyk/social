import React from 'react'
import classes from './Users.module.css'

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
                {
                    id: 1,
                    fullName: 'Volodymyr',
                    photoURL: 'https://img.icons8.com/plasticine/2x/user.png',
                    status: 'I am a boss',
                    location: {city: 'Lvov', country: 'Ukraine'},
                    followed: true
                },
                {
                    id: 2,
                    fullName: 'Ivan',
                    photoURL: 'https://tr.rbxcdn.com/837931be3a05185708662ddf200ea36a/352/352/Avatar/Png',
                    status: 'I am a developer',
                    location: {city: 'Kiev', country: 'Ukraine'},
                    followed: true
                },
                {
                    id: 3,
                    fullName: 'Natasha',
                    photoURL: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Crystal_Clear_kdm_user_female.svg/1024px-Crystal_Clear_kdm_user_female.svg.png',
                    status: 'I am a designer',
                    location: {city: 'New York', country: 'USA'},
                    followed: false
                }
            ]
        )
    }

    return (
        <div>
            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div className={classes.userAva}>
                            <img src={u.photoURL} alt="user"/>
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
                            <div>{u.fullName}</div><
                            div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.city}</div>
                            <div>{u.location.country}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}

export default Users