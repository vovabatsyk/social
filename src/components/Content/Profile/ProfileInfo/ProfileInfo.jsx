import React from "react"
import classes from "./ProfileInfo.module.css"
import Preloader from "../../../common/Preloader/Preloader"

const ProfileInfo = props => {
  if (!props.profile) {
    return <Preloader />
  }

  return (
    <div>
      <div className={classes.logo}>
        <img
          src="https://s.rsg.sc/sc/images/react/logo/socialclub.png"
          alt="social"
        />
      </div>
      <div >
        <img src={props.profile.photos.large} className={classes.ava} alt="ava" />
        <p>{props.profile.aboutMe}</p>
        </div>
    </div>
  )
}

export default ProfileInfo
