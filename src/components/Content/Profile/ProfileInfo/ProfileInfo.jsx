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
      <div className={classes.ava}>
        <img src={props.profile.photos.large} alt="ava" />
        ava + desc
      </div>
    </div>
  )
}

export default ProfileInfo
