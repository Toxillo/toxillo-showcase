import * as React from 'react'
import { buttonContainer } from './button.module.scss'

const Button = ({ dest, icon, text }) => {
    return (
        <a className={buttonContainer} href={dest}>
            <img className='icon' alt='Icon' src={icon} />
            <span>{text}</span>
        </a>
    )
}

export default Button