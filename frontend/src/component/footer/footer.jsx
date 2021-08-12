import React from 'react'
import classes from './footer.module.css'
import Logo from '../header/logo/logo.jsx'
import ImpLst from './importantlinks/importantlink'


export default function footer() {
    return (
        <div className={classes.footer}>
            <Logo />
            <ImpLst />
        </div>
    )
}