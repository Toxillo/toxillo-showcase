import * as React from 'react'
import { Link} from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { tile, tileGraphicContainer } from './tile.module.scss'

const Tile = ({ data }) => {
    const image = getImage(data.preview_image)
    return (
        <Link className={tile} to={"projects/" + data.slug}>
            <span>{data.platform}</span>
            <h2>{data.title}</h2>
            <div>
                <GatsbyImage className={tileGraphicContainer} image={image} alt={data.preview_image_alt} />
            </div>
        </Link>
    )
}

export default Tile