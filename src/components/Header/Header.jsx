import React from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <header className={classes.header}>
      <img
        src="https://pngimage.net/wp-content/uploads/2018/06/gold-facebook-icon-png.png"
        // src="https://ru.seaicons.com/wp-content/uploads/2016/06/GTA-4-new-3-icon.png"
        alt="Facebook"
      />
      <img
        src="https://iconbug.com/download/size/256/icon/4625/golden-glow-google"
        // src="https://ru.seaicons.com/wp-content/uploads/2016/06/GTA-4-new-3-icon.png"
        alt="Google"
      />
      <img
        src="https://icons.iconarchive.com/icons/graphics-vibe/neon-glow-social/256/twitter-icon.png"
        // src="https://ru.seaicons.com/wp-content/uploads/2016/06/GTA-4-new-3-icon.png"
        alt="Twitter"
      />

    </header>
  );
}

export default Header
