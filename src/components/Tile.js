import * as React from 'react'
import { Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { tile, tileGraphicContainer, platform } from './tile.module.scss'

const Tile = ({ data }) => {
    const image = getImage(data.preview_image)
    return (
        <Link className={tile} to={"projects/" + data.slug}>
            <span className={platform}>{data.platform}</span>
            <h3>{data.title}</h3>
            <div>
                <GatsbyImage className={tileGraphicContainer} image={image} alt={data.preview_image_alt} />
            </div>
        </Link>
    )
}

export default Tile