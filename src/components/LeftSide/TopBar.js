import React, { Component } from 'react'
import classes from "./TopBar.module.css" 

class TopBar extends Component { 
    render() {
        return (
            <div className={classes.sidebar}>
                <h1 className={classes.logo}>Magboffin</h1>
                <hr className={classes.line}></hr>
                <ul>   
                    <li>@DIVYA 24</li>
                    <li>BOOKMARK</li>
                </ul> 
                
                <div className={classes.bottom}>
                 settings
                </div>
            </div>
        )
    }
}

export default TopBar ; 
