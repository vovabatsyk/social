import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from 'react-router-dom'

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <nav className={classes.links}>
                <div className={classes.item}>
                    <NavLink to="/profile" activeClassName={classes.active}>Profile</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/dialogs" activeClassName={classes.active}>Message</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/news" activeClassName={classes.active}>News</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/music" activeClassName={classes.active}>Music</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/settings" activeClassName={classes.active}>Settings</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/friends" activeClassName={classes.active}>Friends</NavLink>
                    <div>
                        <div>
                            <img src="https://i2.wp.com/intermedium.ru/wp-content/uploads/2017/01/avatar-round-1.png?quality=100" alt=""/>
                            <p>Helga</p>
                        </div>
                        <div>
                            <img src="https://i2.wp.com/solidcasechambers.com.ng/wp-content/uploads/2017/02/avatar-round-3.png?ssl=1" alt=""/>
                            <p>Alex</p>
                        </div>
                        <div>
                            <img src="https://lh6.googleusercontent.com/proxy/mvRl_kTze2jMZhmXHPLq3EhKEMnGnfZErL8MIuB2SfupDaLRJd05LlcJ3TAOxw1-ip74jfqiW-bojcB7V_7zP_zVLO-p6dfih2hU_vUr7Ir2" alt=""/>
                            <p>Sofia</p>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar
