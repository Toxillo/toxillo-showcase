import { StaticImage } from 'gatsby-plugin-image'
import * as React from 'react'
import { buttonContainer, buttonLink, imageBig } from './main.module.scss'

import Layout from '../components/Layout'
import Seo from '../components/Seo'
import cv from '../images/CV_current.pdf'





const CVPage = () => {
  return (
    <Layout>
      <section>
        <StaticImage className={imageBig} alt='cv' src='../images/cv_current.png'/>
        <a className={buttonContainer} href={cv} download={true}>
          <div className={buttonLink}>Download</div>
        </a> 
      </section>
    </Layout>
  )
}

export const Head = ({ data }) => <Seo title="Curriculum Vitae" />

export default CVPage