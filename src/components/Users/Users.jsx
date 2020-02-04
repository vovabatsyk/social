import React from "react"
import classes from "./Users.module.css"
import userPhoto from "../../assets/images/user.png"

let Users = props => {
  let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  let pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }

  return (
    <div>
      <div className={classes.wrap}>
        {pages.map(p => {
          return (
            <span
              className={props.currentPage === p && classes.selected}
              onClick={e => {
                props.onPageChanged(p)
              }}
            >
              {p}
            </span>
          )
        })}
      </div>
      {props.users.map(u => (
        <div key={u.id}>
          <span>
            <div className={classes.userAva}>
              <img
                src={u.photos.small ? u.photos.small : userPhoto}
                alt="user"
              />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unFollow(u.id)
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id)
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.name}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{"u.location.city"}</div>
              <div>{"u.location.country"}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  )
}

export default Users
