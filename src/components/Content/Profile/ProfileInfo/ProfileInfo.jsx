import React from 'react'
import classes from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div className={classes.logo}>
                <img src="https://s.rsg.sc/sc/images/react/logo/socialclub.png" alt="social"/>
            </div>
            <div>
                ava + desc
            </div>
        </div>
    )
}

export default ProfileInfo
