import React from 'react'
import classes from './ratting.module.css'

export default function ratting(props) {
    const ratting = props.ratting;
    return (
        <div className={classes.ratting}>
            <p>Ratting :</p>
            <i className={ ratting >= '1' ? 'fas fa-star' : ratting >= '0.5' ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            <i className={ ratting >= '2' ? 'fas fa-star' : ratting >= '1.5' ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            <i className={ ratting >= '3' ? 'fas fa-star' : ratting >= '2.5' ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            <i className={ ratting >= '4' ? 'fas fa-star' : ratting >= '3.5' ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
            <i className={ ratting >= '5' ? 'fas fa-star' : ratting >= '4.5' ? 'fas fa-star-half-alt' : 'far fa-star'}></i>
        </div>
    )
}