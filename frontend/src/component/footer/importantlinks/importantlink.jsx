import React from 'react'
import classes from './importantlinl.module.css'
import {links} from './linklist'

export default function importantlink() {
    return (
        <div className={classes.importantlink}>
            <h2>Our Links</h2>
            <ul> 
                {
                    links.map( (item , index) =>{ 
                        return( 
                            <li key={index}><a href={item.url}>{item.tittle}</a></li>
                        )
                    } )
                }
            </ul>
        </div>
    )
}