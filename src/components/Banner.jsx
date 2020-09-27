import React from "react";
import s from '../stylesheets/banner.module.css'

export const Banner = () => {
    return (
        <section className = {s.wrapper}>
            <h1>Lorem ipsum</h1>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
        </section>
    )

}