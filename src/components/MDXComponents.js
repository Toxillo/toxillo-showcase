import * as React from 'react'
import { imageContainer } from './mdx.module.scss'

const MDXImage = ({ children }) => {
    return (
        <div className={imageContainer}>
            {children}
        </div>
    )
}

export { MDXImage } 