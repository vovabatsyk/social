import React from 'react'
import preloader from './preloader.svg'
import classes from './Preloader.module.css'

let Preloader = (props) => {
  return (
    <div className={classes.preloader}>
      <img src={preloader} alt='loader' />
    </div>
  )
}

export default Preloader