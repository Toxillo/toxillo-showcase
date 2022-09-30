import { Link } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'

const Tile = ({ dest, platform, title, img, img_alt }) => {
    return (
        <Link className='tile' to={dest}>
            <span>{platform}</span>
            <h2>{title}</h2>
            <div className='tile-graphic-container'>
                <StaticImage className='tile-graphic' src="../images/homeScreen.png" alt="Screenshot of Vocab Trainer app"
                />
            </div>
        </Link>
    )
}

export default Tile